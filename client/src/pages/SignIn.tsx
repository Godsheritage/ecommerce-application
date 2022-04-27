import { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleSubmit = () => {
    const info = {
      email,
      password,
    };
  };

  return (
    <div>
      <div className="form w-50">
        <h1 className="text-center pb-2">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input
              type="email"
              className="form-control"
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
              placeholder="Passwword"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Sign In
          </button>
          <p>or sign in with google</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
