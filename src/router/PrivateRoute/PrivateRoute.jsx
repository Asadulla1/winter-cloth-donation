import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AuthContext } from "../Provider/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location}></Navigate>;
};

export default PrivateRoute;
