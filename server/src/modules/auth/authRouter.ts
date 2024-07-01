import express, { Router } from "express"
import { googleOAuthHandler } from "./authController";

export const authRoute : Router = express.Router();

authRoute.get('/callback/google',googleOAuthHandler)
