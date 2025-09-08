import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";

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
    </div>
  );
};

// config driven ui

const configDrivenUI = {
  type: "restaurants",
  cards: [
    {
      restId: "1",
      name: "Burgar King",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgar", "American"],
      rating: "4.2",
    },
    {
      restId: "2",
      name: "Parcel point",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Mexican", "Italian"],
      rating: "3.2",
    },
    {
      restId: "3",
      name: "Koli wada",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Wada Pav", "Street Food"],
      rating: "4.2",
    },
    {
      restId: "4",
      name: "Masala chat",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Chat", "Idli"],
      rating: "2.2",
    },
  ],
};

const RestaurantCard = ({ name, image, cuisines, rating }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {configDrivenUI.cards.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.restId} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h2>Footer</h2>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
