import express ,{Express ,Request,Response} from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import { authRoute } from "./modules/auth/authRouter";


const port = process.env.PORT;


const app : Express = express();

app.use(bodyParser.json());

app.listen(port,()=>{
  console.log("The app is running on port 8000");
})

app.get('/',(req:Request, res: Response)=>{
  res.send("The backend is now live")
})


app.use('/api/auth',authRoute);
