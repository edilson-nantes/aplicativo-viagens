import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableDriver1732649460804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE SEQUENCE IF NOT EXISTS public.driver_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            CREATE TABLE IF NOT EXISTS public.driver
            (
                id integer NOT NULL DEFAULT nextval('driver_id_seq'::regclass),
                nome character varying COLLATE pg_catalog."default" NOT NULL,
                descricao character varying COLLATE pg_catalog."default" NOT NULL,
                carro character varying COLLATE pg_catalog."default" NOT NULL,
                avaliacao character varying COLLATE pg_catalog."default" NOT NULL,
                taxa numeric NOT NULL,
                minimo numeric NOT NULL,
                created_at timestamp without time zone NOT NULL DEFAULT now(),
                updated_at timestamp without time zone NOT NULL DEFAULT now(),
                CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY (id)
            );

            ALTER SEQUENCE IF EXISTS public.driver_id_seq OWNED BY public.driver.id;

            ALTER TABLE IF EXISTS public.driver
                OWNER to postgres;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.driver
        `)
    }

}
