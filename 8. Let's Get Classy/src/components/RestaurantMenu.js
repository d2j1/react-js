import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [menuItems, setMenuItems] = useState([]);
    const { resId } = useParams();
    console.log(resId);
    
    useEffect(() => {
        // when component loads
        getMenuData();
    }, []);

    const getMenuData = () => {
        //  call the api with resId, for now managing with dummy data

         const menuItemsTemp = [
        { id: 1, name: "Pizza" },
        { id: 2, name: "Burger" },
        { id: 3, name: "Diet Coke" },
        { id: 4, name: "Pasta" },
        { id: 5, name: "Veg Burger" },
    ];

    setMenuItems(menuItemsTemp);

    };  


   

    return (
      <>
        {menuItems.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="menu">
            <h1>Restaurant Name</h1>
            <p>Menu</p>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
};


export default RestaurantMenu;