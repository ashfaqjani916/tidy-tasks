import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { logger } from "../config/logger";

export const oauthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  const accessToken = token?.toString().split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized Request",
    });
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    logger.error("JWT Secret Env Variable not found");
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  try {
    const decoded = jwt.verify(accessToken, jwtSecret);
    res.locals.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized Request",
    });
  }
};
