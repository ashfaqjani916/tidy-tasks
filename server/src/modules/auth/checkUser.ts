import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

export default function checkUser(req:Request, res:Response) {
  const token = req.cookies.jwtToken;
  console.log("the token is ",token)  
    if (!token) return res.status(401).json({ message: 'Not authenticated' });
    // const secret  = process.env.JWT_SECRET;
    // if(!secret) {
    //     return res.status(500).json({message:"Internal server error"});
    // }
    const key = "secret";
    try {
        const user = jwt.verify(token, key);
        res.json({ user });
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}
