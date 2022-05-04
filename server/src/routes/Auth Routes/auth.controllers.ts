import { RequestHandler } from "express";
import { findUser, signUp } from "../../model/auth models/auth.models";



export const httpSignUp: RequestHandler = async (req, res) => {
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
  const existingMail = await findUser(email);

  if (existingMail !== null) {
    return res.status(400).json({
      error: "mail already exists",
    });
  }

  //sign the user up
  await signUp(email, password);

  const newUser = await findUser(email);
  req.session!.userId = newUser._id;

  return res.status(201).json({
    message: "user has been created",
  });
};


//sign users in
export const httpSignIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  //find user
  const user = await findUser(email);
  if (user === null) {
    return res.status(404).json({
      error: "User not found",
    });
  }
  if (user.password !== password) {
    return res.status(400).json({
      error: "Incorrect password",
    });
  }
  req.session!.userId = user._id;
  return res.status(200).json({
    message : "user has been logged in"
  });
};


export const httpSignOut:RequestHandler = (req, res) => {
  req.session = null
  return res.status(200).redirect('/')

}