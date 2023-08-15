
   
-- CREATE DATABASE "first-look"


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INT DEFAULT 0
);

-- Need to copy over tasklist from Jules' fork
CREATE TABLE tasklist (
    "id" serial PRIMARY KEY,
    "taskname" VARCHAR (400) NOT NULL,
    "date" VARCHAR (50),
    "completionstatus" BOOLEAN DEFAULT FALSE 
);

INSERT INTO "tasklist" ("taskname", "date", "completionstatus")
VALUES ('Schedule appointment', '3/19/2023', FALSE);