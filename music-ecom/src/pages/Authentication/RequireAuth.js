import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const RequireAuth = ({ children }) => {
  const {
    AuthState: { IsLoggedIn },
  } = useAuth();

  let location = useLocation();

  return IsLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
