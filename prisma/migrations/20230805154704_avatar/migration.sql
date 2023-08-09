/*
  Warnings:

  - A unique constraint covering the columns `[avatar]` on the table `Avatar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `Avatar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Avatar" ADD COLUMN     "avatar" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_avatar_key" ON "Avatar"("avatar");
