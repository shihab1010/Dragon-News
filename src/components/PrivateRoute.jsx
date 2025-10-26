import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location =useLocation()
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
