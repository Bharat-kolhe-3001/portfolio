import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Fake submit (UI only)
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);

      setForm({
        name: "",
        contact: "",
        subject: "",
        message: "",
      });

      // Auto-hide popup
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }, 800);
  };

  const quickLinks = [
    { img: "/github.png", link: "https://github.com/Bharat-kolhe-3001" },
    { img: "/linkedin.png", link: "https://www.linkedin.com/in/bharat-kolhe-4b1964288/" },
    { img: "/gmail.png", link: "mailto:bharatkolhe20@gmail.com" },
    { img: "/whatsapp.png", link: "https://wa.me/919860053992" },
  ];

  return (
    <section className="contact-section" id="contact">
      {/* 🔔 POPUP */}
     <AnimatePresence>
  {showPopup && (
    <motion.div
      className="contact-popup"
      initial={{ x: 300, opacity: 0 }}     // 👉 from right
      animate={{ x: 0, opacity: 1 }}       // 👉 center
      exit={{ x: -100, opacity: 0 }}       // 👉 exit left
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      ✅ Message submitted successfully!
    </motion.div>
  )}
</AnimatePresence>


      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Let’s Connect 🤝
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have a project or opportunity? Feel free to reach out.
      </motion.p>

      {/* SOCIAL LINKS */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15 }}
          >
            <img src={item.img} alt="social" className="social-icon" />
          </motion.a>
        ))}
      </motion.div>

      {/* CONTACT FORM */}
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
        />

        <motion.button
          type="submit"
          className="contact-btn"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "🚀 Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}

