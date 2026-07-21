const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { volunteerValidation } = require('../utils/validation');
const { formLimiter } = require('../middleware/rateLimiter');
const { encrypt } = require('../config/encryption');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', formLimiter, volunteerValidation, async (req, res) => {
  try {
    const { fullName, dateOfBirth, addressStreet, addressCity, addressProvince, addressPostalCode, email, phone, availability, skills, consentGiven } = req.body;

    const volunteer = await prisma.volunteer.create({
      data: {
        fullName: encrypt(fullName),
        dateOfBirth: new Date(dateOfBirth),
        addressStreet: encrypt(addressStreet),
        addressCity: encrypt(addressCity),
        addressProvince: encrypt(addressProvince),
        addressPostalCode: encrypt(addressPostalCode),
        email: encrypt(email),
        phone: encrypt(phone),
        availability,
        skills,
        consentGiven,
        consentDate: new Date(),
        status: 'PENDING',
        screeningStatus: 'NOT_STARTED',
      }
    });

    await prisma.auditLog.create({
      data: {
        action: 'VOLUNTEER_APPLICATION_SUBMITTED',
        details: `Volunteer application received (ID: ${volunteer.id})`,
        ipAddress: req.ip,
      }
    });

    res.status(201).json({
      message: 'Application submitted successfully. You will be contacted after review.',
      id: volunteer.id
    });
  } catch (error) {
    console.error('Volunteer application error:', error);
    res.status(500).json({ error: 'Failed to submit application. Please try again.' });
  }
});

module.exports = router;
