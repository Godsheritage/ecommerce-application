
const SignIn = () => {
  return (
    <div>
      <div className="form">
        <h1>Login</h1>
        <form>
          <div className="mb-3">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>or sign in with google</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
