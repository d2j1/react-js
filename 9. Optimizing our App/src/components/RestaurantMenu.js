import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
   
    const { resId } = useParams();

    // Custom Hook
    const resInfo = useRestaurantMenu(resId);

    return (
      <>
        {resInfo.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="menu">
            <h1>Restaurant Name</h1>
            <p>Menu</p>
            <ul>
              {resInfo.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
};


export default RestaurantMenu;