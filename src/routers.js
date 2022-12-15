import { Cart } from "./pages/Cart";
import { Login } from "./components/Login";
import { Showcase } from "./pages/Showcase";
import { ProductPage } from "./pages/ProductPage";
import { PageNotFound } from "./pages/PageNotFound";
import { RedirectAuth } from "./components/hoc/RedirectAuth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />,
      errorElement: <PageNotFound />,
    },

    {
      path: "cart",
      element: (
        <RedirectAuth>
          <Cart />
        </RedirectAuth>
      ),
    },
    {
      path: "product",
      element: (
        <RedirectAuth>
          <Showcase />
        </RedirectAuth>
      ),
      errorElement: <PageNotFound />,
    },
    {
      path: "product/:id",
      element: (
        <RedirectAuth>
          <ProductPage />
        </RedirectAuth>
      ),
      errorElement: <PageNotFound />,
    },
  ],
  { basename: "/pizza-shop" }
);
