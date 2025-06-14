import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  return Cookies.get("token") ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
