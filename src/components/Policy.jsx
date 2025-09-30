// src/components/Policy.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gradient-to-br from-neutral-950 via-gray-950 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">ClutchX Privacy Policy</h1>
        <p className="text-gray-400 text-center mb-6">
          Effective Date: 07-09-2025 | Last Updated: 07-09-2025
        </p>

        <p className="mb-6 text-gray-300 leading-relaxed">
          ClutchX (“we,” “our,” “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (“ClutchX Platform”). By accessing or using our services, you agree to the terms outlined in this Privacy Policy.
        </p>

        {/* Sections */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>Personal Information:</strong> Name, phone number, email address, date of birth, and profile details.</li>
            <li><strong>Booking Information:</strong> Café/venue details, number of players, date, time, and payments.</li>
            <li><strong>Payment Information:</strong> UPI, card details, or wallet information (processed via secure third-party gateways).</li>
            <li><strong>Location Data:</strong> To show nearby venues and offers.</li>
            <li><strong>Device Information:</strong> IP address, device type, operating system, app version, and cookies for performance analytics.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Provide seamless booking services for cafés, gaming hubs, snooker, and theatres.</li>
            <li>Process and confirm your payments securely.</li>
            <li>Send booking confirmations, receipts, and reminders.</li>
            <li>Notify you about offers, discounts, and events.</li>
            <li>Improve app functionality, user experience, and security.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">3. Sharing of Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Vendors/Partners: To confirm your bookings and provide services.</li>
            <li>Payment Gateways: For secure transaction processing.</li>
            <li>Service Providers: For analytics, cloud hosting, and customer support.</li>
            <li>Legal Authorities: If required by law or to protect ClutchX users.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-300">
            We use industry-standard security measures (encryption, firewalls, and access controls) to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">5. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Access and update your profile information.</li>
            <li>Request deletion of your account and personal data.</li>
            <li>Opt out of promotional communications at any time.</li>
            <li>Control location and notification permissions from your device settings.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">6. Cookies & Tracking Technologies</h2>
          <p className="text-gray-300">
            We may use cookies, device identifiers, and analytics tools to enhance your experience, remember preferences, and track app performance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
          <p className="text-gray-300">
            ClutchX is not intended for users under 13 years of age. We do not knowingly collect data from children.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">8. Third-Party Links</h2>
          <p className="text-gray-300">
            The app may contain links to third-party websites. We are not responsible for their privacy practices or content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. Any changes will be notified through the app or website, and the “Last Updated” date will be revised.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="text-gray-300">
            For any questions or concerns regarding this Privacy Policy, please contact us at: <br />
            <span className="text-indigo-400 font-medium">clutchxcare@gmail.com</span> <br />
            +91 9363799363
          </p>
        </section>

        {/* Back to Home Button */}
        {/* <div className="flex justify-center mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-md font-medium text-white text-center"
          >
            Back to Home
          </Link>
        </div> */}

        <p className="mt-12 text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} ClutchX. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
