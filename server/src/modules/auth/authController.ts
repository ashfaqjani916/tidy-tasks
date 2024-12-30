import { Request,  Response } from "express";
import {
  fetchGoogleAccessToken,
  fetchGoogleUserInfo,
  generateJWTToken,
  getUserByEmail,
  // generateJWTToken,
  // getUserByEmail,
} from "./authService";
import { addUser } from "../addUser/addUser";
import { db } from "../../db/db";
import { user } from "../../db/schema";
import { eq } from "drizzle-orm";
require('dotenv').config();

const frontendUrl = process.env.CLIENT_BASE_URL as string;

let access_tokenn :string
let refresh_tokenn
let jwtTokennn :any

export const googleOAuthHandler = async (req: Request, res: Response) => {
  try {
    if (!frontendUrl) {
      const errorMessage = "Frontend URL not configured";
      console.error(errorMessage, process.env.CLIENT_BASE_URL);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const { code } = req.query;

    //we are recieving the response 

    if (!code) {
      const errorMessage = "Invalid request. Please try again";
      return res.redirect(`${frontendUrl}login?error=${errorMessage}`);
    }

    const tokenResponse = await fetchGoogleAccessToken(code as string);
    

    
    const userData = await fetchGoogleUserInfo(tokenResponse.data.access_token);
    access_tokenn = userData.data.access_token;

    
    const User = await getUserByEmail(userData.data.email);
    if (!User) {
      addUser(userData.data);
      return res.redirect(`${frontendUrl}/welcome`);
    }

    if(tokenResponse.data.refresh_token)
    {
        await db.update(user).set({refresh_token:tokenResponse.data.refresh_token}).where(eq(user.email,userData.data.email))
    }
   


    
    console.log("...... successfully printed user data",userData.data)
    console.log("......... token response",tokenResponse)
    
    


    //from this this above data we have to check in the database if the user is present 


    
    //if the user is present then redirect to home page 

    //if the user is not present then redirect him to welcome page

    

    

    const currentUser = User;
    const jwtToken = await generateJWTToken(currentUser);
    jwtTokennn = jwtToken
    let redirectURL = `${frontendUrl}/`;
    
  //   res.cookie('jwtToken', jwtToken, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent only over HTTPS in production
  //     sameSite: 'strict', // Adjust this based on your app’s requirements (Strict, Lax, or None)
  //     maxAge: 24 * 60 * 60 * 1000 // Token expires in 24 hours, for example
  //   });
  //  res.status(200).json({ message: 'Login successful' });
   return res.redirect(`${redirectURL}?token=${jwtToken}`);
    
  } catch (error) {
    const errorMessage = "Error handling OAuth callback: " + error;
    console.error(errorMessage);
    return res.redirect(`${frontendUrl}/login?error=${errorMessage}`);
  }
};


export const SendCreds = (_req:Request,res:Response)=>{
    res.send({
      access_token:access_tokenn,
      refresh_token:refresh_tokenn,
      jwt_token:jwtTokennn 
    })
}

