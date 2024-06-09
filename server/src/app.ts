import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import {user} from "./db/schema"
import {db} from "./db/db"
import { hashPassword } from './utils/passwordUtil';

const port = process.env.PORT;

interface User {
  username: string;
  email: string;
  password: string;
}


const app = express();

app.use(bodyParser.json());

app.listen(port,()=>{
  console.log("The app is running on port 8000");
})

app.get('/',( req,res)=>{
  res.send("The backend is now live")
})

app.post('/',(req,res)=>{
  console.log("the post url is hit");
  const data = req.body;
  addData(data);
  res.send("New user added");
  

})

async function hashing(pass :string){
  return await hashPassword(pass);
}

async function addData(data :User){
  await db.insert(user).values({
    username: data.username,
    password_hash: await hashing(data.password),
    email: data.email
  });

  const details = await db.query.user.findFirst();
  console.log(details);


}
