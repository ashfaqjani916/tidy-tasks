CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar NOT NULL,
	"name" varchar(255),
	"profileImg" varchar,
	"info" varchar
);
