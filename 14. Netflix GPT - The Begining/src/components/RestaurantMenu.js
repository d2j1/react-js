import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategories from "./RestaurantCategories";



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

const [categories, setCategories] = useState([
  {
    name: "Recommended",
    items: ["Pizza", "Burger", "Pasta", "Sushi"],
  },
  {
    name: "Newly Added",
    items: ["Tacos", "Steak", "Sandwich"],
  },
  {
    name: "Lassi, Smoothies and Shakes",
    items: ["Mango Lassi", "Strawberry Smoothie", "Chocolate Shake"],
  },
  {
    name: "Ice Cream and Kulfis",
    items: ["Ice Cream", "Kulfi", "Matka Kulfi"],
  },
  {
    name: "Meals and Thalis",
    items: ["Salad", "Veg Thali", "Non-Veg Thali", "Fries"],
  },
]);

const [showIndex, setShowIndex] = useState(3);
    return (
      <>
        {menuItems.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="text-center m-4 p-4 border border-solid border-black rounded-md">
            <h1 className="font-bold text-lg m-2 p-2">Restaurant Name</h1>
            <p className="font-semibold m-2 p-2">Menu</p>
            <p className="text-gray-600 " >{menuItems.join(", ") }</p>
            
            {categories.map((category, index) => (
              <RestaurantCategories key={category.name} name={category.name}
               items={category.items} 
               index = {index}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)} />
            ))}
            
          </div>
        )}
      </>
    );
};


export default RestaurantMenu;

