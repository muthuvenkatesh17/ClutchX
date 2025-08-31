// src/components/EarlyAccessWithMap.jsx
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function EarlyAccessWithMap() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.phone || !formData.email) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in all required fields!",
      });
      return;
    }

    emailjs
      .send(
        "service_zt426d4",
        "template_ec9w29i",
        { ...formData },
        "XymN87JECTZ1vN0vg"
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You’re on the Early Access list! 🚀",
          });
          setFormData({ name: "", age: "", phone: "", email: "" });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Something went wrong. Please try again.",
          });
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <section id="early-access" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Get Early Access 🚀
        </h2>
        <p className="text-white max-w-xl mx-auto text-sm sm:text-base opacity-80">
          Be the first to try ClutchX. Sign up now for exclusive early access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {/* Early Access Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-right"
          className="overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col gap-5 
          bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg max-h-[500px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />

          <button
            type="submit"
            className="self-center bg-white/20 backdrop-blur-lg border border-white/40 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-white/40 hover:text-black transition text-sm text-white"
          >
            Get Early Access
          </button>

          <p className="self-center mt-2 text-sm text-white-400 font-medium text-center">
            🚀 Obtain Early Access and get up to 25% discount!
          </p>
        </form>

        {/* Map Container */}
        <div
          data-aos="fade-left"
          className="p-6 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col max-h-[500px]"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-cyan-300" size={24} />
            <h3 className="text-xl font-semibold text-white">Our Location</h3>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/30 shadow-md flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5465019406697!2d80.206761!3d13.000831999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267432669a727%3A0xe8a38bd99924b53!2sRs%2C%2022-38%2C%20Parutthivakam%20St%2C%20Ramapuram%2C%20Mosque%20Colony%2C%20Alandur%2C%20Chennai%2C%20Tamil%20Nadu%20600016!5e0!3m2!1sen!2sin!4v1756143006222!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="mt-4 text-white text-sm leading-relaxed opacity-80">
            ClutchX, Chennai, India
          </p>
        </div>
      </div>
    </section>
  );
}
