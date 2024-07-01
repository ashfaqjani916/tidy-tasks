import axios from "axios";
import jwt from "jsonwebtoken";

import { db } from "../../db/db";

const GOOGLE_AUTH_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USER_INFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";
const TOKEN_EXPIRATION = "7d";
const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

interface GoogleAccessTokenResponse {
  access_token: string;
  refresh_token: string;
}

export const fetchGoogleAccessToken = async (code: string) => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URL;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error("Google OAuth is not properly configured");
  }

  return await axios.post<GoogleAccessTokenResponse>(GOOGLE_AUTH_URL, null, {
    params: {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join(" "),
    },
  });
};

interface GoogleUserInfoResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export const fetchGoogleUserInfo = async (accessToken: string) => {
  
  return await axios.get(GOOGLE_USER_INFO_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

};



// export const generateJWTToken = async (user: User): Promise<string> => {
//   const jwtSecret = process.env.JWT_SECRET;
//   if (user.role === 'STUDENT') {
//     const dbStudent = await db.query.Students.findFirst({ where: (Students, { eq }) => eq(Students.id, user.id) });
//     if (dbStudent) {
//       user.displayName = dbStudent.studentName;
//     }
//   } else {
//     const dbClub = await db.query.Clubs.findFirst({ where: (Clubs, { eq }) => eq(Clubs.id, user.id) });
//     if (dbClub) {
//       user.displayName = dbClub.name;
//     }
//   }

//   if (!jwtSecret) {
//     throw new Error("JWT Secret is not properly configured");
//   }

//   try {
//     const token = jwt.sign(
//       {
//         id: user.id,
//         displayName: user.displayName,
//         emailAddress: user.email,
//         photoURL: user.profile_url,
//         role: user.role,
//       },
//       jwtSecret,
//       {
//         expiresIn: TOKEN_EXPIRATION,
//       }
//     );
//     return token;
//   } catch (error) {
//     throw new Error("Error generating JWT token" + error);
//   }
// };
