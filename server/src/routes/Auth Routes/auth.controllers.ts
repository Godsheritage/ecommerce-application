import { RequestHandler } from "express";
import { findUser, signUp } from "../../model/auth models/auth.models";
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
  const existingMail = await findUser(email, password);

  if (existingMail !== null) {
    return res.status(400).json({
      error: "mail already exists",
    });
  }

  //sign the user up
  await signUp(email, password);

  const newUser = await findUser(email, password);
  req.session!.userId = newUser._id;
  return res.status(201).json({
    message: "user has been created",
  });
};

export const httpSignIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  //find user
  const user = await findUser(email, password);
  req.session!.userId = user._id;
  return res.status(200).json(user);
};
