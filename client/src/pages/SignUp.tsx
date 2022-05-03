import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes, signUpTypes } from "../../../types";

const SignUp: React.FC = () => {

  const { signUserUp } = useContext(ProductContext) as contextTypes;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nameError, setNamerror] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  //form submission
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
          <button
            type="submit"
            disabled={false}
            className="contact-btn align-self-center mt-3 w-50"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
