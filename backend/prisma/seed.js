const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const admins = [
    { email: process.env.ADMIN1_EMAIL, password: process.env.ADMIN1_PASSWORD, name: 'Admin' },
    { email: process.env.ADMIN2_EMAIL, password: process.env.ADMIN2_PASSWORD, name: 'Team' },
  ];

  for (const a of admins) {
    if (!a.email || !a.password) {
      console.warn(`Skipping ${a.name}: set ADMIN_EMAIL and ADMIN_PASSWORD env vars`);
      continue;
    }
    const hashedPassword = await bcrypt.hash(a.password, 12);
    await prisma.admin.upsert({
      where: { email: a.email },
      update: {},
      create: {
        email: a.email,
        password: hashedPassword,
        name: a.name,
        role: 'admin',
      },
    });
    console.log('Admin seeded:', a.email);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
