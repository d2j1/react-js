import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="food villa logo"
      src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Log out</button>
      )}
    </div>
  );
};

export default Header;
