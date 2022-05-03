import { RequestHandler } from "express";
import { findMail, signUp } from "../../model/auth models/auth.models";

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

  if (existingMail) {
    return res.status(400).json({
      err: "mail already exists",
    });
  }

  //sign the user up
  await signUp(email, password);
  return res.status(201).json({
    message: "user has been created",
  });

};
