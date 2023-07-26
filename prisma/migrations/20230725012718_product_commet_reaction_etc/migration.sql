/*
  Warnings:

  - Added the required column `productId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Comment_Reaction" (
    "id" SERIAL NOT NULL,
    "isLike" BOOLEAN NOT NULL DEFAULT true,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Comment_Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart_Product" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Cart_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "img" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,
    "relese_date" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(20) NOT NULL,
    "about_brand" VARCHAR(200) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(20) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_Reaction_isLike_key" ON "Comment_Reaction"("isLike");

-- CreateIndex
CREATE UNIQUE INDEX "Product_img_key" ON "Product"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_key" ON "Brand"("brand");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment_Reaction" ADD CONSTRAINT "Comment_Reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment_Reaction" ADD CONSTRAINT "Comment_Reaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Product" ADD CONSTRAINT "Cart_Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
