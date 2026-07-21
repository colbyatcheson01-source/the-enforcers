/*
  Warnings:

  - Added the required column `addressCity` to the `Volunteer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressPostalCode` to the `Volunteer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressProvince` to the `Volunteer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressStreet` to the `Volunteer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "addressCity" TEXT NOT NULL,
ADD COLUMN     "addressPostalCode" TEXT NOT NULL,
ADD COLUMN     "addressProvince" TEXT NOT NULL,
ADD COLUMN     "addressStreet" TEXT NOT NULL,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL;
