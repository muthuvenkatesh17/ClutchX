// src/components/DownloadAppSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Store badges
const playStoreBadge =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function DownloadAppSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-10"
      style={{ userSelect: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Left - Play Store */}
        <motion.div
          className="flex flex-col items-center max-w-xs"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <button
            onClick={() => setShowComingSoon(true)}
            className="block w-36 cursor-not-allowed grayscale opacity-70"
            aria-label="Coming soon on Google Play Store"
            disabled
          >
            <img
              src={playStoreBadge}
              alt="Google Play Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </button>
          <p className="mt-2 text-sm text-gray-400 italic">Coming Soon</p>
        </motion.div>

        {/* Center - Text */}
        <motion.div
          className="text-center max-w-md px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Coming Soon 🚀
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            ClutchX is on the way! Soon you’ll be able to download it on iOS and
            Android. Stay tuned for updates.
          </p>
        </motion.div>

        {/* Right - App Store */}
        <motion.div
          className="flex flex-col items-center max-w-xs"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <button
            onClick={() => setShowComingSoon(true)}
            className="block w-36 cursor-not-allowed grayscale opacity-70"
            aria-label="Coming soon on Apple App Store"
            disabled
          >
            <img
              src={appStoreBadge}
              alt="Apple App Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </button>
          <p className="mt-2 text-sm text-gray-400 italic">Coming Soon</p>
        </motion.div>
      </motion.div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                📱 ClutchX App
              </h3>
              <p className="text-gray-200">
                We’re still putting on the finishing touches.  
                The app will be available on the App Store & Play Store soon!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
