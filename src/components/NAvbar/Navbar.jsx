import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "daisyui/components/button";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="nav flex gap-5  text-accent">
        <NavLink className="p-3" to="/">
          Home
        </NavLink>
        <NavLink className="p-3" to="/about">
          About
        </NavLink>
        <NavLink className="p-3" to="/career">
          Career
        </NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-10 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-8">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
