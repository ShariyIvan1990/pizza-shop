import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const RedirectAuth = ({ children }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  useEffect(() => {
    console.log("is auth: ", sessionStorage.getItem("isAuth"));
    if (!sessionStorage.getItem("isAuth")) {
      navigate("/", { state: { from: pathname } });
    }
  }, [navigate, pathname]);

  return children;
};
