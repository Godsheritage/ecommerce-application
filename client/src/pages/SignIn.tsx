import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes, signUpTypes } from "../../../types";
import GoogleLogo from "../assets/img/Google.png";

const SignIn: React.FC = () => {
  const { signUsersIn } = useContext(ProductContext) as contextTypes;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //submit form
  const handleSubmit = async(e:React.SyntheticEvent) => {
    e.preventDefault()
    const credentials = {
      email,
      password,
    };
    await signUsersIn(credentials)
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
          <button
            type="submit"
            className="contact-btn align-self-center mt-3 w-50 "
          >
            Sign In
          </button>
          <div className="my-3">
            <a href="/auth/google">
              <img src={GoogleLogo} className="googleLogo" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
