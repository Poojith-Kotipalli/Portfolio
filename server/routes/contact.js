// File: routes/contact.js

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    await Message.create({ name, email, message });
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (err) {
    console.error("Error saving message:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

module.exports = router;
