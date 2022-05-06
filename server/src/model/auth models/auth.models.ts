import userDatabase from "./auth.mongo";
import crypto from "crypto";
import util from "util";

const scrypt = util.promisify(crypto.scrypt);

//find email
export const findUser = async (email: string) => {
  return await userDatabase.findOne({ email }, { __v: 0 });
};

//sign up users
export const signUp = async (email: string, password: string) => {
  const salt = crypto.randomBytes(8).toString("hex");

  const buff: any = await scrypt(password, salt, 64);

  return await userDatabase.create({
    email,
    password: `${buff.toString("hex")}.${salt}`,
  });
};

const hashPasswords = () => {};

const comparePasswords = () => {};
