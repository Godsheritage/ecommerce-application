import { RequestHandler } from "express";
import { findMail, signUp } from "../../model/auth models/auth.models";
// import cookieSession from "cookie-session";

export const httpSignup: RequestHandler = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({
      error: "missing fields",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      error: "passwords don't match",
    });
  }

  //check if mail exists
  const existingMail = await findMail(email);

  if (existingMail !== null) {
    return res.status(400).json({
      error: "mail already exists",
    });
  }

  //sign the user up
  await signUp(email, password);
  
  const newMail = await findMail(email);
  req.session!.userId = newMail._id;
  return res.status(201).json({
    message: "user has been created",
  });
};
