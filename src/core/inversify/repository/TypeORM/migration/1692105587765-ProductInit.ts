import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductInit1692105587765 implements MigrationInterface {
    name = 'ProductInit1692105587765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "CreatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "UpdatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "name" character varying(20) NOT NULL, "description" character varying(200) NOT NULL, "price" integer NOT NULL, "currency" character varying(2) NOT NULL, "rating" integer NOT NULL DEFAULT '0', "IMG" character varying, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
