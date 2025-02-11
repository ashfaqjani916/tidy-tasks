import express ,{Express ,Request,Response} from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import { authRoute } from "./modules/auth/authRouter";
import prefrencesFunction from "./modules/preferences/userPrefrences";
import { updateTasks } from "./modules/Tasks/updateTasks";
import cors from "cors";
var cookieParser = require('cookie-parser')
import { scheduleTask } from "./modules/schedule/scheduleTask";
import { fetchTasks } from "./modules/Tasks/fetchTasks";
import { SendCreds } from "./modules/auth/authController";
import checkUser from "./modules/auth/checkUser";


const port = process.env.PORT;


const app : Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.listen(port,()=>{
  console.log("The app is running on port",port);
})

app.get('/',(req:Request, res: Response)=>{
  res.send("The backend is now live")
})

app.post('/api/preferences',prefrencesFunction);
app.post('/api/updatetasks',updateTasks);
app.use('/api/auth',authRoute);
app.post('/api/scheduletask',scheduleTask);
app.get('/api/fetchtasks',fetchTasks);
app.get('/api/getcreds',SendCreds);
app.get('/api/checkUser',checkUser);

export default app;


// [{
//   "id": "65347aeb-f3ee-48b9-9c48-634519355ab8",
//   "taskname": "new task ",
//   "description": "tell is more about ur task ",
//   "due": "2024-07-26T18:30:00.000Z",
//   "category": "m@google.com"
// }]
