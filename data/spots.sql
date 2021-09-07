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
0101000020E610000070E33B297A7158C00000000000003E40	test spot 2	Austin	driveway
\.
END;
COMMIT;
