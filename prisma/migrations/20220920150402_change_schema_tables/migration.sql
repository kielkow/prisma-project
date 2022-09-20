/*
  Warnings:

  - You are about to drop the column `courseId` on the `teachers` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_courseId_fkey";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "teacherId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "courseId";

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
