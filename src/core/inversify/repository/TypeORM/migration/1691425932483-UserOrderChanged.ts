import { MigrationInterface, QueryRunner } from "typeorm";

export class UserOrderChanged1691425932483 implements MigrationInterface {
    name = 'UserOrderChanged1691425932483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_01eea41349b6c9275aec646eee"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" character varying(13) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_01eea41349b6c9275aec646eee" ON "user" ("phone_number") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_01eea41349b6c9275aec646eee"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" character varying(14) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_01eea41349b6c9275aec646eee" ON "user" ("phone_number") `);
    }

}
