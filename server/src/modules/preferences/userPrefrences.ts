import {Request,Response } from "express";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { db } from "../../db/db";
import { user } from "../../db/schema";
import { eq } from "drizzle-orm";




const prefrencesFunction = async (req:Request,res:Response)=>{

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  try {

    const data = req.body;
    const dataString = JSON.stringify(data);

    const prompt = `Analyze the following data points to derive a concise summary of the user's work style ${dataString}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    await db.update(user).set({
      info: text
    }).where(eq(user.id,"117321555173672589319"));

    res.status(200).json({message:"User preferences updated successfully"});
    
  } catch (error) {
    console.log("The error is",error)
  }
  
  
}


export default prefrencesFunction;
