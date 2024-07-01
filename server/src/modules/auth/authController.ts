import { Request, Response } from "express";
import {
  fetchGoogleAccessToken,
  fetchGoogleUserInfo,
  // generateJWTToken,
  // getUserByEmail,
} from "./authService";
require('dotenv').config();

const frontendUrl = process.env.CLIENT_BASE_URL as string;

export const googleOAuthHandler = async (req: Request, res: Response) => {
  try {
    if (!frontendUrl) {
      const errorMessage = "Frontend URL not configured";
      console.error(errorMessage, process.env.CLIENT_BASE_URL);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const { code } = req.query;
    console.log(code);
    //we are recieving the response 

    if (!code) {
      const errorMessage = "Invalid request. Please try again";
      return res.redirect(`${frontendUrl}login?error=${errorMessage}`);
    }

    const tokenResponse = await fetchGoogleAccessToken(code as string);
    console.log("we are getting user resoonse", tokenResponse.data.access_token);
    
    const userData = await fetchGoogleUserInfo(tokenResponse.data.access_token);
    res.send(userData.data)
    console.log("...... successfully printed user data")
    // const user = await getUserByEmail(userData.data.email);

    //from this this above data we have to check in the database if the user is present 
    
    //if the user is present then redirect to home page 

    //if the user is not present then redirect him to welcome page



    // if (!user) {
      
    //   return res.redirect(`${frontendUrl}/welcome`);
    // }

    // const currentUser = user;
    // const jwtToken = await generateJWTToken(currentUser);
    // let redirectURL = `${frontendUrl}/`;

    

    // return res.redirect(`${redirectURL}?token=${jwtToken}`);
  } catch (error) {
    console.log("this is being printed")
    const errorMessage = "Error handling OAuth callback: " + error;
    console.error(errorMessage);
    return res.redirect(`${frontendUrl}/login?error=${errorMessage}`);
  }
};
