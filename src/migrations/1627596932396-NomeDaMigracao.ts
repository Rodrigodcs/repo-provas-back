import {MigrationInterface, QueryRunner} from "typeorm";

export class NomeDaMigracao1627596932396 implements MigrationInterface {
    name = 'NomeDaMigracao1627596932396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, "typeId" integer, "courseId" integer, "teacherId" integer, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "period" integer NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "majors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9d82cf80fe0593040e50ccb297e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_teachers_teachers" ("coursesId" integer NOT NULL, "teachersId" integer NOT NULL, CONSTRAINT "PK_1975c70cd2f6c710f59cbf8d03f" PRIMARY KEY ("coursesId", "teachersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d5fdcc383d18ba83787739425f" ON "courses_teachers_teachers" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ff08e178f8bae6ca9d69b494a" ON "courses_teachers_teachers" ("teachersId") `);
        await queryRunner.query(`CREATE TABLE "majors_courses_courses" ("majorsId" integer NOT NULL, "coursesId" integer NOT NULL, CONSTRAINT "PK_c1f491b98119541fa6aa400aef5" PRIMARY KEY ("majorsId", "coursesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_96b329683dd14f98534ed9ccba" ON "majors_courses_courses" ("majorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2d587413b9874a60d53cba16c2" ON "majors_courses_courses" ("coursesId") `);
        await queryRunner.query(`CREATE TABLE "majors_teachers_teachers" ("majorsId" integer NOT NULL, "teachersId" integer NOT NULL, CONSTRAINT "PK_b348e8d3e13fef7c5f450953ac1" PRIMARY KEY ("majorsId", "teachersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eda8b0e87ceebb07ce45c12134" ON "majors_teachers_teachers" ("majorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1e8c4a424e111ae2db02748936" ON "majors_teachers_teachers" ("teachersId") `);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_221f7366f24fb54ef4f3af4c8c5" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_7f83dda887820244f729fe7e4c0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_teachers_teachers" ADD CONSTRAINT "FK_d5fdcc383d18ba83787739425f8" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "courses_teachers_teachers" ADD CONSTRAINT "FK_6ff08e178f8bae6ca9d69b494ad" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "majors_courses_courses" ADD CONSTRAINT "FK_96b329683dd14f98534ed9ccba5" FOREIGN KEY ("majorsId") REFERENCES "majors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "majors_courses_courses" ADD CONSTRAINT "FK_2d587413b9874a60d53cba16c21" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "majors_teachers_teachers" ADD CONSTRAINT "FK_eda8b0e87ceebb07ce45c121342" FOREIGN KEY ("majorsId") REFERENCES "majors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "majors_teachers_teachers" ADD CONSTRAINT "FK_1e8c4a424e111ae2db027489367" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "majors_teachers_teachers" DROP CONSTRAINT "FK_1e8c4a424e111ae2db027489367"`);
        await queryRunner.query(`ALTER TABLE "majors_teachers_teachers" DROP CONSTRAINT "FK_eda8b0e87ceebb07ce45c121342"`);
        await queryRunner.query(`ALTER TABLE "majors_courses_courses" DROP CONSTRAINT "FK_2d587413b9874a60d53cba16c21"`);
        await queryRunner.query(`ALTER TABLE "majors_courses_courses" DROP CONSTRAINT "FK_96b329683dd14f98534ed9ccba5"`);
        await queryRunner.query(`ALTER TABLE "courses_teachers_teachers" DROP CONSTRAINT "FK_6ff08e178f8bae6ca9d69b494ad"`);
        await queryRunner.query(`ALTER TABLE "courses_teachers_teachers" DROP CONSTRAINT "FK_d5fdcc383d18ba83787739425f8"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_7f83dda887820244f729fe7e4c0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_221f7366f24fb54ef4f3af4c8c5"`);
        await queryRunner.query(`DROP INDEX "IDX_1e8c4a424e111ae2db02748936"`);
        await queryRunner.query(`DROP INDEX "IDX_eda8b0e87ceebb07ce45c12134"`);
        await queryRunner.query(`DROP TABLE "majors_teachers_teachers"`);
        await queryRunner.query(`DROP INDEX "IDX_2d587413b9874a60d53cba16c2"`);
        await queryRunner.query(`DROP INDEX "IDX_96b329683dd14f98534ed9ccba"`);
        await queryRunner.query(`DROP TABLE "majors_courses_courses"`);
        await queryRunner.query(`DROP INDEX "IDX_6ff08e178f8bae6ca9d69b494a"`);
        await queryRunner.query(`DROP INDEX "IDX_d5fdcc383d18ba83787739425f"`);
        await queryRunner.query(`DROP TABLE "courses_teachers_teachers"`);
        await queryRunner.query(`DROP TABLE "majors"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "types"`);
    }

}
