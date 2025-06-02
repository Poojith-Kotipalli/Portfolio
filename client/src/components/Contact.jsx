import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Say Hello</h2>
      <p className="text-center text-gray-600 mb-8">I’d love to hear from you. Fill out the form below to get in touch!</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-2">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-2">
            Oops, something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.section>
  );
}
