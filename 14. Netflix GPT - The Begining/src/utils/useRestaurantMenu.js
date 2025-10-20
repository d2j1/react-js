import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    // Custom Hook to fetch restaurant menu data based on restaurant ID
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_API_URL + resId);
        const jsonData = await data.json();

        setResInfo(jsonData);
    }
    return resInfo;
}


export default useRestaurantMenu;;