import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Title = () => (

  <Link to="/">
    <img
      className="w-24   h-24 "
      alt="food villa logo"
      src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="bg-pink-50 flex justify-between  shadow-lg px-10 text-lg font-semibold">
      <Title />
      <div >
        <ul className="flex align-middle  gap-8 p-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>{" "}
          </li>

          <li>
            <Link to="/cart">Cart ( {cartItems.length} items) </Link>
          </li>

            <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>{loggedInUser} -- Log out</button>
      )}
    </div>
  );
};

export default Header;
