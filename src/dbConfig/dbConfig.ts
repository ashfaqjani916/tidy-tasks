import mongoose from "mongoose";

export async function connect() {
  try {

    mongoose.connect(process.env.MONGO_URL!);

    const connection  = mongoose.connection;

    connection.on('connected',()=>{
      console.log("MongoDB is connected");
    })

    connection.on('error',(err)=>{
      console.log("Unable to connect to DATABASE"+err);
      process.exit();
    })
    
  } catch (error) {
    console.log(error)
  }
}
