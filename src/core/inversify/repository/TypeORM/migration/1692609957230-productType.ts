import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductType1692609957230 implements MigrationInterface {
    name = 'ProductType1692609957230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "type_product" DROP CONSTRAINT "UQ_8017d550d172035900069ab9c50"`);
        await queryRunner.query(`ALTER TABLE "type_product" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "type_product" ADD "type" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "type_product" ADD CONSTRAINT "UQ_8017d550d172035900069ab9c50" UNIQUE ("type")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "type_product" DROP CONSTRAINT "UQ_8017d550d172035900069ab9c50"`);
        await queryRunner.query(`ALTER TABLE "type_product" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "type_product" ADD "type" character varying(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "type_product" ADD CONSTRAINT "UQ_8017d550d172035900069ab9c50" UNIQUE ("type")`);
    }

}
