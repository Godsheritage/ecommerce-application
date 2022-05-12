import util from "util";
import crypto from "crypto";
import userDatabase from "./auth.mongo";

const scrypt = util.promisify(crypto.scrypt);

//find email
export const findUser = async (email: string) => {
  return await userDatabase.findOne({ email }, { __v: 0 });
};

//sign up users
export const signUp = async (email: string, password: string) => {
  const salt = crypto.randomBytes(8).toString("hex");

  //create hash buffer
  const buff: any = await scrypt(password, salt, 64);

  const record = {
    email,
    password: `${buff.toString("hex")}.${salt}`,
  };

  return await userDatabase.create(record);
};

//compare passw inputs
export const comparePasswords = async (
  hashedPassword: string,
  password: string 
) => {
  const [hashed, salt] = hashedPassword.split(".");
  const hashSuppliedBuffer: any = await scrypt(password, salt, 64);

  return hashSuppliedBuffer.toString('hex') === hashed;
};
