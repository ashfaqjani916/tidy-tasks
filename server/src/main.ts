import "dotenv/config"
import {db} from "./db/db"
import { user } from "./db/schema"

async function main() {
  await db.insert(user).values({
    username :"ashfaq",
    password_hash:"asdfghjkjhgfds",
    email:"ashfaqjani@gmail.com",
  });

  const person = await db.query.user.findFirst();
  console.log(person);
}


main();
