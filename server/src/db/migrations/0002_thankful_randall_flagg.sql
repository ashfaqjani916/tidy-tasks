DROP TABLE "categories";--> statement-breakpoint
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_category_id_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "tasks" DROP COLUMN IF EXISTS "category_id";