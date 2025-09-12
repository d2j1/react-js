import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Services from "./components/Services";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />,
  children: [
    {
      path:"/",
      element:<Body />
    },    
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  }],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
