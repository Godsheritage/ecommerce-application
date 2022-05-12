import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { contextTypes, signUpTypes } from "../types";
import ProductContext from "../context/ProductContext";

const SignUp: React.FC = () => {
  const { signUsersUp } = useContext(ProductContext) as contextTypes;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nameError, setNamerror] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const defaultVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffnes: 2 },
    },
  };

  const buttonVariants = {
    hidden: {
      bacgroundColor: "#F51167",
      border: "none",

      // scale: 0.95,
      // color: "#333",
      // backgroundColor: "#fff",
      // border: "3px solid #F51167",
      // transition: { duration: 0.7, ease: "easeInOut" },
    },
    visible: {
      scale: 0.95,
      color: "#333",
      backgroundColor: "#fff",
      border: "3px solid #F51167",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  //form submission
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const credentials: signUpTypes = {
      email,
      password,
      confirmPassword,
    };
    signUsersUp(credentials);
  };

  return (
    <motion.div
      className="container"
      variants={defaultVariants}
      initial="hidden"
      animate="visible"
    >
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}
          <motion.button
            type="submit"
            disabled={false}
            className="contact-btn align-self-center mt-3 w-50"
            variants={buttonVariants}
            initial="hidden"
            whileHover="visible"
          >
            Sign up
          </motion.button>
          <Link to="/signin" className="card-link pt-3">
            Already have an account? Sign In
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
