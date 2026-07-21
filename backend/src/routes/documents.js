const express = require('express');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const doc = await prisma.document.findUnique({ where: { id: req.params.id } });
    if (!doc) return res.status(404).json({ error: 'Document not found' });
    res.sendFile(path.join(__dirname, '../../uploads', doc.fileName));
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve document' });
  }
});

module.exports = router;
