const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { contactValidation } = require('../utils/validation');
const { formLimiter } = require('../middleware/rateLimiter');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', formLimiter, contactValidation, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      }
    });

    res.status(201).json({
      message: 'Your message has been received. We will respond within 2-3 business days.'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;
