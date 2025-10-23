import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Find us on</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> FAcebook</button>
          <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start Twitter"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
