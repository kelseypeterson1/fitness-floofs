-- Create database "fitness_floofs"

-- Create table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "steps" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER NOT NULL REFERENCES "user",
	"steps" INTEGER DEFAULT 0,
	"date" DATE DEFAULT '03/28/22'
);

CREATE TABLE "floofs" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR(100) NOT NULL,
    "egg_id" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL
);

CREATE TABLE "egg" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "egg_id" INTEGER NOT NULL REFERENCES "floofs" DEFAULT 1,
    "status" INTEGER NOT NULL DEFAULT 1,
    "date" DATE DEFAULT '03/28/22'
);

CREATE TABLE "flock" (
    "id" SERIAL PRIMARY KEY,
    "floof_id" INTEGER NOT NULL REFERENCES "floofs",
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "name" VARCHAR(20) NOT NULL,
    "personality" VARCHAR(20) NOT NULL,
    "birthday" DATE NOT NULL,
    "income" INTEGER DEFAULT 0,
    "paid" DATE
);

CREATE TABLE "traits" (
	"id" SERIAL PRIMARY KEY,
	"trait" VARCHAR(11),
	"type" VARCHAR(20)
);

CREATE TABLE "coins" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "coins" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "shop" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "background_selected" INTEGER NOT NULL DEFAULT 1,
    "background2" BOOLEAN DEFAULT 'FALSE',
    "background3" BOOLEAN DEFAULT 'FALSE'
);


DROP TABLE "steps";
DROP TABLE "flock";
DROP TABLE "egg";
DROP TABLE "floofs";
DROP TABLE "traits";
DROP TABLE "coins";
DROP TABLE "shop";


-- Adding data
INSERT INTO "user" ("username", "password") VALUES ('user', '1234');
INSERT INTO "floofs" ("type", "egg_id", "rarity") VALUES ('Cloud', 1, 1), ('Mossy', 2, 1), ('Sleepy', 3, 1), ('Plum', 4, 1), ('Friendly', 5, 2), ('Foxy', 6, 2), ('Panda', 7, 2), ('Peeper', 8, 2), ('Cheeper', 9, 2), ('Angelic', 10, 3), ('Devious', 11, 3);
INSERT INTO "egg" ("user_id", "egg_id", "status", "date") VALUES (1, 2, 1, '03/17/2022');
INSERT INTO "flock" ("floof_id", "user_id", "name", "personality", "birthday", "income", "paid") VALUES (1, 1, 'Ollie', 'Aloof', '3/15/22', 1, '3/24/22'), (2, 1, 'Burrito', 'Boisterous', '3/20/22', 2, '3/24/22'), (11, 1, 'Severus', 'Fiesty', '3/20/22', 8, '3/24/22'), (10, 1, 'Angel', 'Gracious', '3/20/22', 9, '3/24/22'), (9, 1, 'Peeps', 'Cute', '3/20/22', 4, '3/24/22'), (3, 1, 'Ernie', 'Grumpy', '3/20/22', 2, '3/24/22'), (8, 1, 'Zelda', 'Sensitive', '3/20/22', 5, '3/25/22'), (4, 1, 'Sammy', 'Psycho', '3/20/22', 2, '3/25/22'), (7, 1, 'Mog', 'Generous', '3/20/22', 5, '3/24/22'), (6, 1, 'Suds', 'Brave', '3/20/22', 5, '3/24/22'), (5, 1, 'Buster', 'Gregarious', '3/20/22', 3, '3/24/22');
INSERT INTO "steps" ("user_id", "steps", "date") VALUES (1, 5234, '03/17/2022');
INSERT INTO "coins" ("user_id", "coins") VALUES (1, 150);
INSERT INTO "shop" ("user_id") VALUES (1);
INSERT INTO "traits" ("trait", "type") VALUES
('Agreeable', 'personality'), 
('Athletic', 'personality'), 
('Calm', 'personality'), 
('Caring', 'personality'), 
('Charming', 'personality'), 
('Cheerful', 'personality'), 
('Clever', 'personality'), 
('Confident', 'personality'), 
('Creative', 'personality'), 
('Curious', 'personality'), 
('Dramatic', 'personality'), 
('Friendly', 'personality'), 
('Generous', 'personality'), 
('Honorable', 'personality'), 
('Kind', 'personality'), 
('Logical', 'personality'), 
('Lovable', 'personality'), 
('Neat', 'personality'), 
('Patient', 'personality'), 
('Playful', 'personality'), 
('Scholarly', 'personality'), 
('Sensitive', 'personality'), 
('Serious', 'personality'), 
('Stoic', 'personality'), 
('Strong', 'personality'), 
('Studious', 'personality'), 
('Suave', 'personality'), 
('Sweet', 'personality'), 
('Wise', 'personality'), 
('Witty', 'personality'), 
('Cute', 'personality'), 
('Emotional', 'personality'), 
('Formal', 'personality'), 
('Frugal', 'personality'), 
('Glamorous', 'personality'), 
('Intense', 'personality'), 
('Mellow', 'personality'), 
('Mystical', 'personality'), 
('Proud', 'personality'), 
('Quiet', 'personality'), 
('Sarcastic', 'personality'), 
('Stylish', 'personality'), 
('Tough', 'personality'), 
('Whimsical', 'personality'), 
('Abrasive', 'personality'), 
('Aloof', 'personality'), 
('Anxious', 'personality'), 
('Arrogant', 'personality'), 
('Cautious', 'personality'), 
('Clumsy', 'personality'), 
('Confused', 'personality'), 
('Cowardly', 'personality'), 
('Crafty', 'personality'), 
('Cynical', 'personality'), 
('Fiery', 'personality'), 
('Forgetful', 'personality'), 
('Gloomy', 'personality'), 
('Impulsive', 'personality'), 
('Lazy', 'personality'), 
('Messy', 'personality'), 
('Paranoid', 'personality'), 
('Pompous', 'personality'), 
('Quirky', 'personality'), 
('Rowdy', 'personality'), 
('Shy', 'personality'), 
('Silly', 'personality'), 
('Sly', 'personality'), 
('Tense', 'personality'), 
('Trendy', 'personality'), 
('Zany', 'personality'), 
('Apricot', 'name'), 
('Archie', 'name'), 
('Bear', 'name'), 
('Beau', 'name'), 
('Bee', 'name'), 
('Bailey', 'name'), 
('Boots', 'name'), 
('Buddy', 'name'), 
('Button', 'name'), 
('Chip', 'name'), 
('Clover', 'name'), 
('Coconut', 'name'), 
('Cricket', 'name'), 
('Charlie', 'name'), 
('Dixie', 'name'), 
('Ellie', 'name'), 
('Freckles', 'name'), 
('Hershey', 'name'), 
('Humphrey', 'name'), 
('Leo', 'name'), 
('Lola', 'name'), 
('Lottie', 'name'), 
('Luna', 'name'), 
('Minnie', 'name'), 
('Sprinkle', 'name'), 
('Muffin', 'name'), 
('Noodle', 'name'), 
('Nikka', 'name'), 
('Ollie', 'name'), 
('Oreo', 'name'), 
('Otis', 'name'), 
('Panda', 'name'), 
('Peaches', 'name'), 
('Pepper', 'name'), 
('Rooster', 'name'), 
('Snickers', 'name'), 
('Seuss', 'name'), 
('Socks', 'name'), 
('Sprout', 'name'), 
('Squirrel', 'name'), 
('Waffle', 'name'), 
('Heroic', 'personality'), 
('Cici', 'name'), 
('Toto', 'name'), 
('Pikachu', 'name'), 
('Pancakes', 'name'), 
('Scooper', 'name'), 
('Billy', 'name'), 
('Sammy', 'name'), 
('Spinner', 'name'), 
('Mog', 'name');