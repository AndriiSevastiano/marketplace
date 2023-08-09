import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1691409054422 implements MigrationInterface {
    name = 'Migration1691409054422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user', 'owner', 'support', 'vendor')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "CreatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '1691409056116', "UpdatedAt" TIMESTAMP WITH TIME ZONE, "AVATAR" character varying NOT NULL, "Role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "email" character varying(35) NOT NULL, "name" character varying(20) NOT NULL, "password" character varying(60) NOT NULL, "phone_number" character varying(14) NOT NULL, "surname" character varying(20) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_01eea41349b6c9275aec646eee" ON "user" ("phone_number") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_01eea41349b6c9275aec646eee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
