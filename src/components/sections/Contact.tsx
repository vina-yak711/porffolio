import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

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
  subject: "Portfolio Inquiry",
  message: "",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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

    try {
      // 1. First attempt direct AJAX delivery to Gmail via FormSubmit
      const response = await fetch(
        `https://formsubmit.co/ajax/${config.html.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[Portfolio Inquiry] ${form.subject || "New Message"} from ${form.name}`,
            name: form.name,
            email: form.email,
            topic: form.subject,
            message: form.message,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: `Thank you, ${form.name}! Your message has been sent directly to Vinayak's Gmail (${config.html.email}).`,
        });
        setForm(INITIAL_STATE);
        return;
      }

      // 2. If FormSubmit returned false or needs activation, fallback to mailto
      setLoading(false);
      handleMailtoFallback();
    } catch (err) {
      console.error("Submission error:", err);
      setLoading(false);
      handleMailtoFallback();
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${config.html.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${form.subject || "Message"} from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\nMessage:\n${form.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setStatusMessage({
      type: "success",
      text: `Message prepared! Opening your mail app to send directly to Vinayak (${config.html.email}).`,
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

        {/* Quick Contact Info Badges */}
        <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm text-secondary">
          {/* Primary Email */}
          <a
            href={`mailto:${config.html.email}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:text-white hover:border-accent font-medium transition-all"
            title="Send Email to Vinayak"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>{config.html.email}</span>
          </a>

          {/* WhatsApp Direct Chat */}
          {config.html.whatsapp && (
            <a
              href="https://wa.me/917249868441?text=Hi%20Vinayak,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 font-medium transition-all"
              title="Open WhatsApp Direct Chat"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {config.html.whatsapp}</span>
            </a>
          )}

          {/* Single Instagram Trigger (Opens Modal with 2 Accounts) */}
          <button
            type="button"
            onClick={() => setIsInstagramModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:text-pink-300 hover:border-pink-400 font-medium transition-all cursor-pointer"
            title="View Both Instagram Accounts"
          >
            <SocialIcon name="instagram" className="w-4 h-4" />
            <span>Instagram (2 Accounts)</span>
          </button>

          {/* Location */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-800/40 border border-gray-700/40 text-gray-300 font-medium">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{config.html.location}</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-primary text-sm flex items-center justify-between">
                <span>{config.contact.form.name.span} *</span>
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

            {/* Email Input */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-primary text-sm flex items-center justify-between">
                <span>{config.contact.form.email.span} *</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={config.contact.form.email.placeholder}
                className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-4 py-3.5 text-primary outline-none focus:border-accent transition-colors text-sm"
                required
              />
            </label>
          </div>

          {/* Subject / Purpose Selector */}
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-primary text-sm">
              Subject / Inquiry Topic
            </span>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-black-100 text-primary rounded-xl border border-gray-700/40 px-4 py-3 text-sm outline-none focus:border-accent transition-colors cursor-pointer"
            >
              <option value="Portfolio Inquiry">💼 General Portfolio Inquiry</option>
              <option value="Job Opportunity / Hiring">🚀 Job Opportunity / Hiring</option>
              <option value="Freelance Web / AI Project">💻 Freelance Web / AI Project</option>
              <option value="Collaboration / Mentorship">🤝 Collaboration / Networking</option>
            </select>
          </label>

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
              className={`p-4 rounded-2xl text-sm font-medium flex items-start gap-3 transition-all ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                  : "bg-rose-500/15 text-rose-300 border border-rose-500/30"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <span>{statusMessage.text}</span>
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
              <span>{loading ? "Sending..." : "Send Message"}</span>
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
