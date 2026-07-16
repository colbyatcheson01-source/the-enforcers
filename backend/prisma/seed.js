const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('[INSERT_REAL_PASSWORD]', 12);

  const admin = await prisma.admin.upsert({
    where: { email: '[INSERT_REAL_ADMIN_EMAIL]' },
    update: {},
    create: {
      email: '[INSERT_REAL_ADMIN_EMAIL]',
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
