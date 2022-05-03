import React from "react";
import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes, signUpTypes } from "../../../types";

const SignUp = () => {
  const { signUserUp } = useContext(ProductContext) as contextTypes;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const credentials: signUpTypes = {
      email,
      password,
      confirmPassword,
    };
    signUserUp(credentials);
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
