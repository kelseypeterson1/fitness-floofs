-- Create database "fitness_floofs"

-- Creating tables
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "floofs" (
    "id" SERIAL PRIMARY KEY,
    "egg_id" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL
);

CREATE TABLE "egg" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "egg_id" INTEGER NOT NULL REFERENCES "floofs",
    "status" INTEGER NOT NULL
);

CREATE TABLE "flock" (
    "id" SERIAL PRIMARY KEY,
    "floof_id" INTEGER NOT NULL REFERENCES "floofs",
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "name" VARCHAR(10) NOT NULL,
    "personality" VARCHAR(10) NOT NULL,
    "age" INTEGER NOT NULL,
    "income" INTEGER
);

--DROP TABLE "flock";
--DROP TABLE "egg";
--DROP TABLE "floofs";


-- Adding data
INSERT INTO "floofs" ("egg_id", "rarity") VALUES (1, 1), (2, 1), (3, 1), (4, 1), (5, 2), (6, 2), (7, 2), (8, 2), (9, 2), (10, 3), (11, 3);
INSERT INTO "egg" ("user_id", "egg_id", "status") VALUES (1, 2, 1);
INSERT INTO "flock" ("floof_id", "user_id", "name", "personality", "age", "income") VALUES (1, 1, 'Pickle', 'Gregarious', 2, 0);

--Server Queries
SELECT "egg_id" FROM "egg" WHERE "user_id" = 1;


