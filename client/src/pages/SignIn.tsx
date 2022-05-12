import { useState } from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/img/Google.png";
import { contextTypes, signUpTypes } from "../types";
import ProductContext from "../context/ProductContext";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signUsersIn } = useContext(ProductContext) as contextTypes;

  const buttonVariants = {
    visible: {
      scale: 0.95,
      color: "#333",
      backgroundColor: "#fff",
      border: "3px solid #F51167",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  //submit form
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    await signUsersIn(credentials);
  };

  return (
    <div className="container">
      <div className="form w-50 d-flex flex-column">
        <h1 className="text-center pb-2">Login</h1>
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
          <motion.button
            type="submit"
            className="contact-btn align-self-center mt-3 w-50 "
            variants={buttonVariants}
            whileHover="visible"
          >
            Sign In
          </motion.button>
          <div className="my-3">
            <a href="/auth/google">
              <img src={GoogleLogo} className="googleLogo" />
            </a>
          </div>
          <Link to="/signup" className="card-link">
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
