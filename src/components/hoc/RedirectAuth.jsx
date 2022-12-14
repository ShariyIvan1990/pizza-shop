import { useLocation, Navigate } from "react-router-dom";
const isAuth = false;

export const RedirectAuth = ({ children }) => {
  const location = useLocation();
  console.log(location.state);
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
};
