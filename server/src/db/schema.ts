
import { pgTable, uuid ,varchar, timestamp} from "drizzle-orm/pg-core"


export const user = pgTable("user", {
  id : uuid("id").primaryKey().defaultRandom(),
  username : varchar("username", {length:255}).notNull(),
  password_hash : varchar("password_hast" ,{length:255}),
  email : varchar("email").notNull()
});


export const tasks = pgTable("tasks", {
  id : uuid("id").primaryKey(),
  userid :uuid("userid").references(()=>user.id),
  task_name : varchar("task_name").notNull(),
  description : varchar("description"),
  due_date: timestamp("due_date"),
  status : varchar("status").default("pending"),
  project_id : uuid("project_id").references(()=>projects.id),
   categroy_id : uuid("category_id").references(()=>categories.id) 
});

export const subtasks = pgTable("subtasks",{
  id: uuid("id").primaryKey(),
  task_name : varchar("task_name").notNull(),
  status : varchar("status").default("pending"),
  task_id : uuid("task_id").references(()=>tasks.id)
});


export const projects = pgTable("projects",{
  id: uuid("id").primaryKey(),
  name: varchar("name"),
  description : varchar("description"),
  user_id : uuid("user_id").references(()=>user.id)
});

export const categories = pgTable("categories",{
  id: uuid("id").primaryKey(),
  name: varchar("name"),
  description : varchar("description")
});


