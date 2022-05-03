import userDatabase from "./auth.mongo";
import { AmpAttachment } from "nodemailer/lib/mailer";

export const findMail = async (email: string) => {
  return await userDatabase.find({ email }, { _v: 0 });
};

export const signUp = async (email: string, password: string) => {
  return await userDatabase.create({ email, password });
};
