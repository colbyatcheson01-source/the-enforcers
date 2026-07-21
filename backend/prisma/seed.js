const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@enforcers.ca' },
    update: {},
    create: {
      email: 'admin@enforcers.ca',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  });

  console.log('Admin seeded:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
