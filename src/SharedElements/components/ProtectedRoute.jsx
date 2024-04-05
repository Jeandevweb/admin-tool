import { Outlet } from "react-router-dom";
import HomePage from "SharedElements/pages/HomePage.jsx";

const ProtectedRoute = () => {
  const access_token = sessionStorage.getItem("access_token");

  //manage in the future the application's access by db_role
  return access_token !== null ? <Outlet /> : <HomePage />;
};

export default ProtectedRoute;
