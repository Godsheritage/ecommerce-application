import userDatabase from "./auth.mongo";

//find email
export const findUser = async (email: string) => {
  return await userDatabase.findOne({ email }, { __v: 0 });
};

//sign up users
export const signUp = async (email: string, password: string) => {
  return await userDatabase.create({ email, password });
};
    
const hashPasswords = () => {}

const comparePasswords = () => {}