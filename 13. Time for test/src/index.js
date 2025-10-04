import React, { useEffect, useState } from "react";
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
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../../12. Lets build our store/src/utils/appStore";


const Grocery = lazy(() => import( "./components/Grocery"));

// Chunking -> we are breaking our code into small pieces

const AppLayout = () => {

  const [userName, setUserName] = useState("DEfault User");

  useEffect(() => {
    // API call to check if user is logged in
    const data = {id: 1, name: "Ankush" };
    setUserName(data.name);
  }, []);
  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <Header />
    </UserContext.Provider>
      <Outlet />
      <Footer />
      </Provider>
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
  },
  {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
  }],
  },
]);



const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
