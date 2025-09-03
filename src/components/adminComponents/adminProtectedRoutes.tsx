import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = localStorage.getItem("user"); // check if user exists in localStorage

  if (!user) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return <>{children}</>;
};

export default ProtectedRoute;
