import { db } from "../../db/db";
import { user } from "../../db/schema";
interface User{
  id:string,
  username:string,
  email:string,
  name:string,
  picture:string,
  info:string |null
}

export const addUser = async(User :User)=>{

 await db.insert(user).values({
  id: User.id,
  username:User.name as string,
  email: User.email,
  name:User.name,
  profileImg: User.picture,
  // info: JSON.stringify(User.info),
}
 );
 console.log("New user added successfully......!!!")
 console.log(await db.query.user.findFirst());

};
