import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { socialLinks } from "../../constants";
import { SocialIcon } from "../atoms/SocialIcon";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN || "",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all fields before sending.",
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
      setTimeout(() => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "Message simulated successfully! (EmailJS credentials not configured yet).",
        });
        setForm(INITIAL_STATE);
      }, 1000);
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent successfully.",
          });
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMessage({
            type: "error",
            text: "Something went wrong while sending your message. Please try again or email directly.",
          });
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-tertiary flex-[0.75] rounded-2xl p-8 border border-gray-700/40 shadow-xl"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Quick Contact Info Pills */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-secondary">
          <a
            href={`mailto:${config.html.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-accent hover:border-accent font-medium transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>{config.html.email}</span>
          </a>

          {config.html.secondaryEmail && (
            <a
              href={`mailto:${config.html.secondaryEmail}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:border-accent font-medium transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>{config.html.secondaryEmail}</span>
            </a>
          )}

          {config.html.whatsapp && (
            <a
              href="https://wa.me/917249868441?text=Hi%20Vinayak,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:border-emerald-400 font-medium transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {config.html.whatsapp}</span>
            </a>
          )}

          <a
            href="https://www.instagram.com/vina_yak711/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:border-pink-400 font-medium transition-all"
          >
            <SocialIcon name="instagram" className="w-4 h-4" />
            <span>@vina_yak711</span>
          </a>

          <a
            href="https://www.instagram.com/viinayak.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:border-pink-400 font-medium transition-all"
          >
            <SocialIcon name="instagram" className="w-4 h-4" />
            <span>@viinayak.in</span>
          </a>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-accent font-medium">
            <MapPin className="w-4 h-4" />
            <span>{config.html.location}</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-primary text-sm">
              {config.contact.form.name.span}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={config.contact.form.name.placeholder}
              className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-5 py-3.5 text-primary outline-none focus:border-accent transition-colors"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-medium text-primary text-sm">
              {config.contact.form.email.span}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={config.contact.form.email.placeholder}
              className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-5 py-3.5 text-primary outline-none focus:border-accent transition-colors"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-medium text-primary text-sm">
              {config.contact.form.message.span}
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={config.contact.form.message.placeholder}
              className="bg-black-100 placeholder:text-secondary rounded-xl border border-gray-700/40 px-5 py-3.5 text-primary outline-none focus:border-accent transition-colors resize-none"
              required
            />
          </label>

          {statusMessage.text && (
            <div
              className={`p-4 rounded-xl text-sm font-medium ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl bg-black-100 border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all duration-200"
                >
                  <SocialIcon name={social.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>

      {/* 3D Earth Globe Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
