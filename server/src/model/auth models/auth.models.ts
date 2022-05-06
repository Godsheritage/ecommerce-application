import userDatabase from "./auth.mongo";
import crypto from "crypto";

//find email
export const findUser = async (email: string) => {
  return await userDatabase.findOne({ email }, { __v: 0 });
};

//sign up users
export const signUp = async (email: string, password: string) => {
  const salt = crypto.randomBytes(8).toString("hex");

  crypto.scrypt(password, salt, 64, (err, buff) => {
    const hashed = buff.toString("hex");
  });

  return await userDatabase.create({ email, password });
};

const hashPasswords = () => {};

const comparePasswords = () => {};
