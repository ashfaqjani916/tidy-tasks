
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Hash a password using bcrypt.
 * @param password - The plain text password to hash.
 * @returns The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

/**
 * Compare a plain text password with a hashed password.
 * @param password - The plain text password.
 * @param hash - The hashed password.
 * @returns True if the passwords match, otherwise false.
 */

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  const match = await bcrypt.compare(password, hash);
  return match;
};






//this is the util code to be used int the main code file to hash the passowrd
// index.ts
// import { hashPassword, comparePassword } from './passwordUtils';

// const runDemo = async () => {
//   try {
//     const password = 'examplePassword';
//     const hashedPassword = await hashPassword(password);
    
//     console.log(`Plain password: ${password}`);
//     console.log(`Hashed password: ${hashedPassword}`);

//     const isMatch = await comparePassword(password, hashedPassword);
//     console.log(`Passwords match: ${isMatch}`);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// runDemo();
