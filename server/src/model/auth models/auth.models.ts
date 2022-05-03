import userDatabase from "./auth.mongo";

//find email
export const findUser = async (email: string, password:string) => {
  return await userDatabase.findOne({ email, password }, { _v: 0 });
};

//sign UP users
export const signUp = async (email: string, password: string) => {
  return await userDatabase.create({ email, password });
};
 