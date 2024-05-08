
import { pgTable, uuid ,boolean ,varchar, timestamp} from "drizzle-orm/pg-core"


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
  completed : boolean("completed")
  
});
