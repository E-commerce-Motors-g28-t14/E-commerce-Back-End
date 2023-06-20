import { MigrationInterface, QueryRunner } from "typeorm";

<<<<<<<< HEAD:src/migrations/1686721647717-InitialMigration.ts
export class InitialMigration1686721647717 implements MigrationInterface {
    name = 'InitialMigration1686721647717'
========
export class createTabless1687185264536 implements MigrationInterface {
    name = 'createTabless1687185264536'
>>>>>>>> 710803482d4b94e3f5f1693b41bd1ab2126dd741:src/migrations/1687185264536-createTabless.ts

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Adress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(150) NOT NULL, "zipCode" character varying(150) NOT NULL, "number" character varying(150) NOT NULL, "city" character varying(150) NOT NULL, "state" character varying(3) NOT NULL, "complement" character varying(150) NOT NULL, "userId" uuid, CONSTRAINT "REL_4beadee5054149d28c4cf727d9" UNIQUE ("userId"), CONSTRAINT "PK_590a4b7e014d4f01f2e10a7b5e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "password" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "cpf" character varying(150) NOT NULL, "birthdate" TIMESTAMP NOT NULL DEFAULT now(), "phone" character varying(11) NOT NULL, "description" character varying(150), "isSeller" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "imageLink" character varying NOT NULL, "isCover" boolean NOT NULL DEFAULT false, "carId" uuid, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
<<<<<<<< HEAD:src/migrations/1686721647717-InitialMigration.ts
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "carId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(150) NOT NULL, "model" character varying(150) NOT NULL, "year" integer NOT NULL, "fuel" character varying(150) NOT NULL, "km" integer NOT NULL, "color" character varying(150) NOT NULL, "isPromo" boolean NOT NULL DEFAULT false, "price" character varying(150) NOT NULL, "description" character varying(150), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Adress" ADD CONSTRAINT "FK_4beadee5054149d28c4cf727d92" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
========
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "carId" uuid, "userId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(150) NOT NULL, "model" character varying(150) NOT NULL, "year" integer NOT NULL, "fuel" integer NOT NULL, "km" integer NOT NULL, "color" character varying(150) NOT NULL, "isPromo" boolean NOT NULL DEFAULT false, "price" character varying(150) NOT NULL, "description" character varying(150), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "password" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "cpf" character varying(150) NOT NULL, "birthdate" TIMESTAMP NOT NULL DEFAULT now(), "phone" character varying(11) NOT NULL, "description" character varying(150), "isSeller" boolean NOT NULL DEFAULT true, "color" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(150) NOT NULL, "zipCode" character varying(150) NOT NULL, "number" character varying(150) NOT NULL, "city" character varying(150) NOT NULL, "state" character varying(3) NOT NULL, "complement" character varying(150) NOT NULL, "userId" uuid, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
>>>>>>>> 710803482d4b94e3f5f1693b41bd1ab2126dd741:src/migrations/1687185264536-createTabless.ts
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_65d938cbc1d7458c7e5898060de" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_65d938cbc1d7458c7e5898060de"`);
        await queryRunner.query(`ALTER TABLE "Adress" DROP CONSTRAINT "FK_4beadee5054149d28c4cf727d92"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "photos"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "Adress"`);
    }

}
