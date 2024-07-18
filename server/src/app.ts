import express ,{Express ,Request,Response} from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import { authRoute } from "./modules/auth/authRouter";
import prefrencesFunction from "./modules/preferences/userPrefrences";
import cors from "cors";


const port = process.env.PORT;


const app : Express = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port,()=>{
  console.log("The app is running on port 8000");
})

app.get('/',(req:Request, res: Response)=>{
  res.send("The backend is now live")
})

app.post('/api/preferences',prefrencesFunction);
app.use('/api/auth',authRoute);

export default app;
