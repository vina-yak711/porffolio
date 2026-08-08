import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, User, Code2 } from "lucide-react";
import { SocialIcon } from "./SocialIcon";

export interface InstagramAccount {
  name: string;
  handle: string;
  role: string;
  url: string;
  badge: string;
  icon: "user" | "code";
  gradient: string;
}

export const instagramAccounts: InstagramAccount[] = [
  {
    name: "Vinayak Deshmane",
    handle: "@vina_yak711",
    role: "Personal Profile • Life, Travel & Updates",
    url: "https://www.instagram.com/vina_yak711/",
    badge: "Personal",
    icon: "user",
    gradient: "from-pink-500 via-rose-500 to-amber-500",
  },
  {
    name: "Vinayak • Tech & AI",
    handle: "@viinayak.in",
    role: "Developer Profile • Code, AI Systems & Builds",
    url: "https://www.instagram.com/viinayak.in/",
    badge: "Tech / Creator",
    icon: "code",
    gradient: "from-purple-500 via-indigo-500 to-cyan-500",
  },
];

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstagramModal: React.FC<InstagramModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#111827] border border-gray-700/60 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-purple-900/40 z-10 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-pink-500/30">
                  <SocialIcon name="instagram" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Instagram Profiles
                  </h3>
                  <p className="text-xs text-secondary">
                    Choose an account to connect with Vinayak
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 rounded-xl bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Account Options */}
            <div className="mt-5 space-y-3.5">
              {instagramAccounts.map((account) => (
                <a
                  key={account.handle}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-gray-900/90 hover:bg-gray-800/90 border border-gray-800 hover:border-pink-500/40 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Account Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${account.gradient} p-0.5 shadow-md`}
                    >
                      <div className="w-full h-full bg-gray-950 rounded-[14px] flex items-center justify-center text-white">
                        {account.icon === "user" ? (
                          <User className="w-5 h-5 text-pink-400" />
                        ) : (
                          <Code2 className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                    </div>

                    {/* Account Details */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                          {account.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-pink-500/15 text-pink-400 border border-pink-500/25">
                          {account.badge}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-pink-400 mt-0.5">
                        {account.handle}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {account.role}
                      </p>
                    </div>
                  </div>

                  {/* External Link Arrow */}
                  <div className="p-2 rounded-xl bg-gray-800/80 group-hover:bg-pink-500 text-gray-400 group-hover:text-white transition-all transform group-hover:translate-x-0.5">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            {/* Modal Footer Note */}
            <div className="mt-5 pt-4 border-t border-gray-800/60 text-center">
              <p className="text-xs text-gray-500">
                Opens directly in Instagram app or browser
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
