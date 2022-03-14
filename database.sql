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
    "egg_id" INTEGER NOT NULL REFERENCES "floofs"
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
--DROP TABLE "floofs";
--DROP TABLE "egg";

-- Adding data
INSERT INTO "floofs" ("egg_id", "rarity") VALUES (1, 1), (2, 1), (3, 1), (4, 1), (5, 2), (6, 2), (7, 2), (8, 2), (9, 2), (10, 3), (11, 3);
INSERT INTO "egg" ("user_id", "egg_id") VALUES (1, 2);
INSERT INTO "flock" ("floof_id", "user_id", "name", "personality", "age", "income") VALUES (1, 1, 'Pickle', 'Gregarious', 2, 0);
