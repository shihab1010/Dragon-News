import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center pt-5">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center py-4">
              Dont’t Have An Account ?
              <Link className="text-secondary" to="/auth/register">
                {" "}
                Register
              </Link>
            </p>
            {
              error&& <p className="text-red-500 text-center">{error}</p>
            }
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
