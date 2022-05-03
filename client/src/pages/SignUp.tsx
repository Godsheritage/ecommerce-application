import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");

  const handleSubmit = () => {
    const info = {
      email,
      password,
      confirmPassword
    };
  };

  return (
    <div className="container">
      <div className="form w-50 d-flex flex-column">
        <h1 className="text-center pb-2">Create Account</h1>
        <form onSubmit={handleSubmit} className=" d-flex flex-column ">
          <div className="my-3">
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="contact-btn align-self-center mt-3 w-50 "
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
