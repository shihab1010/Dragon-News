import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Sociallogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Login With</h2>
      <div className="space-y-2">
        <button className="btn btn-outline w-full">
          <FcGoogle size={22} /> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub size={22} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;
