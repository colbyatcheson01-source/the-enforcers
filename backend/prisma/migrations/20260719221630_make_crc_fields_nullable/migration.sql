-- AlterTable
ALTER TABLE "Volunteer" ALTER COLUMN "addressCity" DROP NOT NULL,
ALTER COLUMN "addressPostalCode" DROP NOT NULL,
ALTER COLUMN "addressProvince" DROP NOT NULL,
ALTER COLUMN "addressStreet" DROP NOT NULL,
ALTER COLUMN "dateOfBirth" DROP NOT NULL;
