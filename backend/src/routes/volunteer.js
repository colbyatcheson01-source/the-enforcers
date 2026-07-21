const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { volunteerValidation } = require('../utils/validation');
const { formLimiter } = require('../middleware/rateLimiter');
const { encrypt } = require('../config/encryption');
const upload = require('../config/upload');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', formLimiter, upload.array('documents', 5), volunteerValidation, async (req, res) => {
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
        documents: req.files?.length ? {
          create: req.files.map(f => ({
            fileName: f.filename,
            originalName: f.originalname,
            mimeType: f.mimetype,
            fileSize: f.size,
            category: 'criminal_record_check',
          }))
        } : undefined,
      },
      include: { documents: true }
    });

    await prisma.auditLog.create({
      data: {
        action: 'VOLUNTEER_APPLICATION_SUBMITTED',
        details: `Volunteer application received (ID: ${volunteer.id}) with ${req.files?.length || 0} document(s)`,
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
