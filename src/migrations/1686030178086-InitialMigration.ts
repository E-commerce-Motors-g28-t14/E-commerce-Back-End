import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1686030178086 implements MigrationInterface {
    name = 'InitialMigration1686030178086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Adress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(150) NOT NULL, "zipCode" character varying(150) NOT NULL, "number" character varying(150) NOT NULL, "city" character varying(150) NOT NULL, "state" character varying(3) NOT NULL, "complement" character varying(150) NOT NULL, "userId" uuid, CONSTRAINT "REL_4beadee5054149d28c4cf727d9" UNIQUE ("userId"), CONSTRAINT "PK_590a4b7e014d4f01f2e10a7b5e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "password" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "cpf" character varying(150) NOT NULL, "birthdate" TIMESTAMP NOT NULL DEFAULT now(), "phone" character varying(11) NOT NULL, "description" character varying(150), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "UQ_459a9c4887a064ca812c3bfaa16" UNIQUE ("cpf"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "CarModel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, CONSTRAINT "PK_4d88974b9c3c67034a4c4bdb405" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "imageLink" character varying NOT NULL, "isCover" boolean NOT NULL DEFAULT true, "carIdId" uuid, CONSTRAINT "PK_60d73e2714a914f2cf23e026014" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "carId" uuid, CONSTRAINT "PK_91e576c94d7d4f888c471fb43de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "fuel" character varying(150) NOT NULL, "km" integer NOT NULL, "color" character varying(150) NOT NULL, "fipePrice" character varying(150) NOT NULL, "price" character varying(150) NOT NULL, "description" character varying(150), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "brandId" uuid, "modelId" uuid, CONSTRAINT "PK_37ee9dbe8c8c8ff70b35afaf2a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_100d549ad83dafeecad2fd74570" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Adress" ADD CONSTRAINT "FK_4beadee5054149d28c4cf727d92" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Photos" ADD CONSTRAINT "FK_535b99e51f85908244b38b454ee" FOREIGN KEY ("carIdId") REFERENCES "Cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_ea894ef6b56a4a72200f7a75c1d" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD CONSTRAINT "FK_d653766e036b766919dab6970d8" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD CONSTRAINT "FK_39aaa759b4000732cbf9485f5cb" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD CONSTRAINT "FK_19723cf2f8984837e579770dd9b" FOREIGN KEY ("modelId") REFERENCES "CarModel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP CONSTRAINT "FK_19723cf2f8984837e579770dd9b"`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP CONSTRAINT "FK_39aaa759b4000732cbf9485f5cb"`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP CONSTRAINT "FK_d653766e036b766919dab6970d8"`);
        await queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_ea894ef6b56a4a72200f7a75c1d"`);
        await queryRunner.query(`ALTER TABLE "Photos" DROP CONSTRAINT "FK_535b99e51f85908244b38b454ee"`);
        await queryRunner.query(`ALTER TABLE "Adress" DROP CONSTRAINT "FK_4beadee5054149d28c4cf727d92"`);
        await queryRunner.query(`DROP TABLE "Brands"`);
        await queryRunner.query(`DROP TABLE "Cars"`);
        await queryRunner.query(`DROP TABLE "Comments"`);
        await queryRunner.query(`DROP TABLE "Photos"`);
        await queryRunner.query(`DROP TABLE "CarModel"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Adress"`);
    }

}
