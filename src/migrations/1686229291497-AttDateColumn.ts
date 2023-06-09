import { MigrationInterface, QueryRunner } from "typeorm";

export class AttDateColumn1686229291497 implements MigrationInterface {
    name = 'AttDateColumn1686229291497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

}
