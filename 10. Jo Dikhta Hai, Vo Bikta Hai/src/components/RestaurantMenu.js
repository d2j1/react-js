import { useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

  const [menuItems, setMenuItems] = useState( [ "Pizza",
        "Burger",
        "Pasta",
        "Salad",
        "Sushi",
        "Tacos",
        "Steak",
        "Ice Cream",
        "Fries",
        "Sandwich",]);

    return (
      <>
        {menuItems.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="menu">
            <h1>Restaurant Name</h1>
            <p>Menu</p>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
};


export default RestaurantMenu;