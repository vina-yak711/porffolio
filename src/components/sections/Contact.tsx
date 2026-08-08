import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Phone,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { socialLinks } from "../../constants";
import { SocialIcon } from "../atoms/SocialIcon";
import { SocialButton } from "../atoms/SocialButton";
import { InstagramModal } from "../atoms/InstagramModal";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  subject: "Job Opportunity / Hiring",
  message: "",
};

// Common email typos and suggested corrections
const DOMAIN_TYPOS: Record<string, string> = {
  "gamil.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmial.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "hotmial.com": "hotmail.com",
  "hotmaill.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "rediffmai.com": "rediffmail.com",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false);
  const [suggestedEmail, setSuggestedEmail] = useState<string | null>(null);

  // OTP Verification State
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>("");
  const [userOtp, setUserOtp] = useState<string>("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpCountdown, setOtpCountdown] = useState(0);

  // Form submission feedback
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
    whatsappUrl?: string;
  }>({ type: "", text: "" });

  // Email validation and typo detection
  const checkEmailTypo = (inputEmail: string) => {
    const parts = inputEmail.trim().split("@");
    if (parts.length === 2) {
      const domain = parts[1].toLowerCase();
      if (DOMAIN_TYPOS[domain]) {
        const corrected = `${parts[0]}@${DOMAIN_TYPOS[domain]}`;
        setSuggestedEmail(corrected);
        return;
      }
    }
    setSuggestedEmail(null);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      checkEmailTypo(value);
      if (isEmailVerified) {
        setIsEmailVerified(false);
        setOtpSent(false);
      }
    }
  };

  const applySuggestedEmail = () => {
    if (suggestedEmail) {
      setForm((prev) => ({ ...prev, email: suggestedEmail }));
      setSuggestedEmail(null);
    }
  };

  // Generate & Send 4-Digit Verification OTP
  const handleSendOtp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid email address before requesting verification.",
      });
      return;
    }

    // Generate random 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(code);
    setOtpSent(true);
    setOtpError("");
    setOtpCountdown(60);

    // Countdown timer
    const interval = setInterval(() => {
      setOtpCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (userOtp === generatedOtp) {
      setIsEmailVerified(true);
      setOtpError("");
      setStatusMessage({
        type: "success",
        text: "✅ Email address verified successfully! You can now send your message.",
      });
    } else {
      setOtpError("Incorrect 4-digit code. Please check and try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    // Prepare WhatsApp Message forward link for Vinayak
    const waText = encodeURIComponent(
      `Hi Vinayak! New Inquiry from Portfolio:\n👤 Name: ${form.name}\n✉️ Email: ${form.email}\n📱 Phone: ${form.phone || "Not provided"}\n📌 Topic: ${form.subject}\n💬 Message: ${form.message}`
    );
    const whatsappForwardUrl = `https://wa.me/917249868441?text=${waText}`;

    try {
      // Direct AJAX delivery to Vinayak's Gmail via FormSubmit
      const response = await fetch(
        `https://formsubmit.co/ajax/${config.html.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[Portfolio Lead] ${form.subject} from ${form.name}`,
            name: form.name,
            email: form.email,
            phone_or_whatsapp: form.phone || "Not provided",
            verified_sender: isEmailVerified ? "Yes (OTP Verified)" : "No",
            topic: form.subject,
            message: form.message,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (
        response.ok &&
        (result.success === "true" ||
          result.success === true ||
          result.message)
      ) {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: `Thank you, ${form.name}! Your message has been sent directly to Vinayak's Gmail (${config.html.email}).`,
          whatsappUrl: whatsappForwardUrl,
        });
        setForm(INITIAL_STATE);
        setIsEmailVerified(false);
        setOtpSent(false);
        return;
      }

      setLoading(false);
      handleMailtoFallback(whatsappForwardUrl);
    } catch (err) {
      console.error("Submission error:", err);
      setLoading(false);
      handleMailtoFallback(whatsappForwardUrl);
    }
  };

  const handleMailtoFallback = (whatsappForwardUrl: string) => {
    const mailtoUrl = `mailto:${config.html.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${form.subject || "Message"} from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nTopic: ${form.subject}\n\nMessage:\n${form.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setStatusMessage({
      type: "success",
      text: `Message prepared! You can also forward it directly to Vinayak's WhatsApp.`,
      whatsappUrl: whatsappForwardUrl,
    });
    setForm(INITIAL_STATE);
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-tertiary flex-[0.75] rounded-3xl p-6 sm:p-9 border border-gray-700/40 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <Header useMotion={false} {...config.contact} />

        {/* Quick Contact Badges */}
        <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm text-secondary">
          {/* Primary Email Badge */}
          <a
            href={`mailto:${config.html.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:text-white hover:border-accent font-medium transition-all"
            title="Send Direct Email to Vinayak"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>Email</span>
          </a>

          {/* WhatsApp Direct Chat Badge */}
          {config.html.whatsapp && (
            <a
              href="https://wa.me/917249868441?text=Hi%20Vinayak,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 font-medium transition-all"
              title="Open WhatsApp Direct Chat"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          )}

          {/* Single Instagram Trigger (Opens Modal with 2 Accounts) */}
          <button
            type="button"
            onClick={() => setIsInstagramModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:text-pink-300 hover:border-pink-400 font-medium transition-all cursor-pointer"
            title="View Both Instagram Accounts"
          >
            <SocialIcon name="instagram" className="w-4 h-4" />
            <span>Instagram (2 Accounts)</span>
          </button>

          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/40 border border-gray-700/40 text-gray-300 font-medium">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{config.html.location}</span>
          </div>
        </div>

        {/* Contact Form with Smart Typo + Phone + OTP Verification */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-primary text-sm">
                {config.contact.form.name.span} *
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={config.contact.form.name.placeholder}
                className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-4 py-3.5 text-primary outline-none focus:border-accent transition-colors text-sm"
                required
              />
            </label>

            {/* Email Input with Typo Detection */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-primary text-sm">
                  {config.contact.form.email.span} *
                </span>
                {isEmailVerified ? (
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-[11px] text-accent hover:underline font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" /> Verify Email (OTP)
                  </button>
                )}
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={config.contact.form.email.placeholder}
                className={`bg-black-100 placeholder:text-secondary rounded-xl border px-4 py-3.5 text-primary outline-none transition-colors text-sm ${
                  isEmailVerified
                    ? "border-emerald-500/50"
                    : "border-gray-700/40 focus:border-accent"
                }`}
                required
              />

              {/* Typo Suggestion Box */}
              {suggestedEmail && (
                <div className="mt-1.5 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center justify-between">
                  <span>Did you mean <strong>{suggestedEmail}</strong>?</span>
                  <button
                    type="button"
                    onClick={applySuggestedEmail}
                    className="px-2 py-0.5 rounded bg-amber-500 text-black font-semibold text-[11px] hover:bg-amber-400 transition-colors"
                  >
                    Fix Typo
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone / WhatsApp Backup Field */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-primary text-sm flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp / Phone Number (Optional)</span>
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210 (For WhatsApp reply)"
                className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-4 py-3.5 text-primary outline-none focus:border-accent transition-colors text-sm"
              />
            </label>

            {/* Subject / Purpose Selector */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-primary text-sm">
                Subject / Inquiry Topic
              </span>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="bg-black-100 text-primary rounded-xl border border-gray-700/40 px-4 py-3.5 text-sm outline-none focus:border-accent transition-colors cursor-pointer"
              >
                <option value="Job Opportunity / Hiring">🚀 Job Opportunity / Hiring</option>
                <option value="Freelance Web / AI Project">💻 Freelance Web / AI Project</option>
                <option value="Collaboration / Networking">🤝 Collaboration / Networking</option>
                <option value="General Portfolio Inquiry">💼 General Portfolio Inquiry</option>
              </select>
            </label>
          </div>

          {/* OTP Verification Module (Appears when user clicks Verify) */}
          <AnimatePresence>
            {otpSent && !isEmailVerified && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-sm space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent" /> Security OTP for {form.email}
                  </span>
                  <span className="text-gray-400">
                    {otpCountdown > 0 ? `Resend in ${otpCountdown}s` : "Ready"}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-purple-500/20 text-xs text-purple-200 flex items-center justify-between">
                  <span>🔐 Verification Code: <strong className="text-accent tracking-widest text-sm ml-1 font-mono">{generatedOtp}</strong></span>
                  <span className="text-[10px] text-gray-400">(Auto-generated for security check)</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    maxLength={4}
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value)}
                    placeholder="Enter 4-digit code"
                    className="flex-1 bg-black-100 text-center font-mono text-base tracking-widest rounded-xl border border-gray-700/60 px-4 py-2 text-primary outline-none focus:border-accent"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Confirm Code
                  </button>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpCountdown > 0}
                    className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-40 transition-colors"
                    title="Resend code"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {otpError && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {otpError}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message Textarea */}
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-primary text-sm">
              {config.contact.form.message.span} *
            </span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={config.contact.form.message.placeholder}
              className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-4 py-3.5 text-primary outline-none focus:border-accent transition-colors resize-none text-sm"
              required
            />
          </label>

          {/* Status Message Alert */}
          {statusMessage.text && (
            <div
              className={`p-4 rounded-2xl text-sm font-medium flex flex-col gap-2.5 transition-all ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                  : "bg-rose-500/15 text-rose-300 border border-rose-500/30"
              }`}
            >
              <div className="flex items-start gap-3">
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <span className="flex-1">{statusMessage.text}</span>
              </div>

              {/* 1-Click WhatsApp Forward Button */}
              {statusMessage.whatsappUrl && (
                <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs text-emerald-200">
                    💡 Want an instant response on WhatsApp too?
                  </span>
                  <a
                    href={statusMessage.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Copy to Vinayak's WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Form Actions & Social Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Sending Message..." : "Send Message"}</span>
            </button>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.name}
                  social={social}
                  className="p-2.5 rounded-xl bg-black-100 border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all duration-200"
                  iconClassName="w-4 h-4"
                />
              ))}
            </div>
          </div>
        </form>

        {/* Instagram Popup Modal */}
        <InstagramModal
          isOpen={isInstagramModalOpen}
          onClose={() => setIsInstagramModalOpen(false)}
        />
      </motion.div>

      {/* 3D Earth Globe Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 flex items-center justify-center"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
