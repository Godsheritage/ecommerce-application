import { RequestHandler } from "express";

export const httpSignup: RequestHandler = (req, res) => {
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

  const checkIfMailExists = 
};
