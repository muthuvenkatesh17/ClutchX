// src/components/Footer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/share/19TCu3sJyq/?mibextid=wwXIfr" },
    { icon: <FaTwitter />, href: "https://x.com/Clutchxofficial" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/clutchx_official/" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/clutchx/" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@ClutchX_official" },
    { icon: <FaWhatsapp />, href: "https://wa.me/9363799363" },
  ];

  const usefulLinks = [
      { name: "Privacy Policy", href: "#", onClick: () => setShowPolicy(true) },
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="w-full mt-16">
      {/* Glassmorphism container */}
      <div className="w-[100%] mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-t-3xl p-8 flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-white">ClutchX</h2>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              ClutchX is a one-stop booking platform for gaming cafés, PlayStation arenas,
              board games, escape rooms, VR centers, and other entertainment venues —
              offering up to 25% discounts and instant booking confirmation.
            </p>
          </motion.div>

          {/* Middle: Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    color: "#fff",
                    textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                    }}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/3 flex flex-col items-center justify-start text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3 justify-center flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    boxShadow: "0px 0px 12px rgba(255,255,255,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 bg-white/10 rounded-full text-white border border-white/20 hover:border-white/40"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-white-400 text-sm py-4">
        © {new Date().getFullYear()} ClutchX. All rights reserved.
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPolicy && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 text-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">ClutchX Privacy Policy</h2>
                <button
                  onClick={() => setShowPolicy(false)}
                  className="text-red-500 font-bold text-lg hover:text-red-700"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Effective Date: 07-09-2025 | Last Updated: 07-09-2025
              </p>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  ClutchX (“we,” “our,” “us”) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our mobile application and website (“ClutchX
                  Platform”). By accessing or using our services, you agree to the terms
                  outlined in this Privacy Policy.
                </p>

                <h3 className="font-semibold text-lg">1. Information We Collect</h3>
                <ul className="list-disc pl-6">
                  <li>Personal Information: Name, phone number, email, DOB, profile details</li>
                  <li>Booking Information: Café/venue, players, date, time, payments</li>
                  <li>Payment Information: UPI, card, wallet (via secure gateways)</li>
                  <li>Location Data: Nearby venues and offers</li>
                  <li>Device Info: IP, device type, OS, app version, cookies</li>
                </ul>

                <h3 className="font-semibold text-lg">2. How We Use Your Information</h3>
                <ul className="list-disc pl-6">
                  <li>Provide booking services for cafés, gaming hubs, theatres</li>
                  <li>Process and confirm secure payments</li>
                  <li>Send confirmations, receipts, and reminders</li>
                  <li>Notify you about offers and events</li>
                  <li>Improve app functionality and security</li>
                  <li>Comply with legal requirements</li>
                </ul>

                <h3 className="font-semibold text-lg">3. Sharing of Information</h3>
                <ul className="list-disc pl-6">
                  <li>Vendors/Partners: To confirm bookings</li>
                  <li>Payment Gateways: For secure processing</li>
                  <li>Service Providers: Analytics, cloud hosting, support</li>
                  <li>Legal Authorities: If required by law</li>
                </ul>

                <h3 className="font-semibold text-lg">4. Data Security</h3>
                <p>
                  We use encryption, firewalls, and access controls to protect your data.
                  However, no system is 100% secure, and we cannot guarantee absolute
                  protection.
                </p>

                <h3 className="font-semibold text-lg">5. Your Rights</h3>
                <ul className="list-disc pl-6">
                  <li>Access and update profile information</li>
                  <li>Request deletion of account and data</li>
                  <li>Opt out of promotions anytime</li>
                  <li>Control location and notifications via settings</li>
                </ul>

                <h3 className="font-semibold text-lg">6. Cookies & Tracking</h3>
                <p>
                  We may use cookies, identifiers, and analytics tools to enhance your
                  experience, remember preferences, and track performance.
                </p>

                <h3 className="font-semibold text-lg">7. Children’s Privacy</h3>
                <p>
                  ClutchX is not intended for users under 13. We do not knowingly collect
                  data from children.
                </p>

                <h3 className="font-semibold text-lg">8. Third-Party Links</h3>
                <p>
                  Our app may contain links to third-party sites. We are not responsible for
                  their privacy practices.
                </p>

                <h3 className="font-semibold text-lg">9. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy. Any changes will be notified via the
                  app/website with a revised “Last Updated” date.
                </p>

                <h3 className="font-semibold text-lg">10. Contact Us</h3>
                <p>
                  Email: clutchxcare@gmail.com <br />
                  Phone: +91 9363799363
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
