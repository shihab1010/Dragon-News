import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const photourl = form.photo.value;
    // console.log(name, password, email, photourl);
    createUser(email, password)
      .then((res) => {
        updateUser({displayName:name,photoURL:photourl})
        .then(()=>{
          setUser({...res.user,displayName:name,photoURL:photourl});
        navigate("/");
        })
        .catch(error=>{
          console.log(error);
          setUser(res.user)
          
        })
        
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center pt-5">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {/* Photo url  */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center py-4">
              Already Have An Account ?
              <Link className="text-secondary" to="/auth/login">
                {" "}
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
