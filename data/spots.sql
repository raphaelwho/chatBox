SET standard_conforming_strings = OFF;
DROP TABLE IF EXISTS "public"."spots" CASCADE;
BEGIN;
CREATE TABLE "public"."spots" ( "ogc_fid" SERIAL, CONSTRAINT "spots_pk" PRIMARY KEY ("ogc_fid") );
SELECT AddGeometryColumn('public','spots','wkb_geometry',4326,'POINT',2);
CREATE INDEX "spots_wkb_geometry_geom_idx" ON "public"."spots" USING GIST ("wkb_geometry");
ALTER TABLE "public"."spots" ADD COLUMN "name" VARCHAR;
ALTER TABLE "public"."spots" ADD COLUMN "city" VARCHAR;
ALTER TABLE "public"."spots" ADD COLUMN "type" VARCHAR;
COPY "public"."spots" ("wkb_geometry", "name", "city", "type") FROM STDIN;
0101000020E610000070E33B297A7158C04066BEEB02313E40	test spot 1	Austin	parking garage
0101000020E61000006CA0ADC7006C58C050F24BA9BD4E3E40	test spot 2	Austin	driveway
0101000020E610000024EA251CB36E58C0A03076C5035B3E40	test spot 2	Austin	driveway
0101000020E610000018E95A41746D58C030EC1D5CA4423E40	test spot 2	Austin	driveway
\.
END;
COMMIT;
