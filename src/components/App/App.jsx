import { RouterProvider } from "react-router-dom";

import { router } from "../../routers.js";

import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div
        style={{
          position: "fixed",
          width: "max-content",
          bottom: "1rem",
          right: "1rem",
          backgroundColor: "white",
          padding: "0.5rem",
        }}
      >
        <a about="blank" href="https://github.com/ShariyIvan1990">
          GIT Repo
        </a>
      </div>
    </div>
  );
};
