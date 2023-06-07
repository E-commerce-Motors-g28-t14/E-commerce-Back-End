import { MigrationInterface, QueryRunner } from "typeorm";

export class AttEntity1686096672513 implements MigrationInterface {
    name = 'AttEntity1686096672513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
