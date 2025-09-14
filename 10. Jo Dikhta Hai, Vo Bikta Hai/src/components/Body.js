import {  useState } from "react";
import { restaurantList } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// config driven ui

const RestaurantCard = ({ name, image, cuisines, rating }) => {
  return (
    <div className=" h-60 w-40 p-4 m-4 shadow-lg bg-pink-50 hover:bg-pink-100 rounded-lg">
      <img src={image} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="text-sm text-gray-600">{cuisines.join(", ")}</h3>
      <h4 className="text-sm text-gray-600">{rating} stars</h4>
    </div>
  );
};

function filterData(searchQuery, restaurants) {
  const data = restaurants.filter((card) => {
    console.log(card);
    return card.name.toLowerCase()?.includes(searchQuery.toLowerCase());
  });

  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); // here kfc is default value
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurant, setfilteredRestaurant] = useState(restaurantList);

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   const data = await fetch("https://animechan.xyz/api/quotes");
  //   const dataInJson = data.json();
  //   console.log(dataInJson);
  // }



  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1> You are Offline, Please check your internet connection!!</h1>;

  // early return -> it does not let the component to render.
  if (restaurants == 0) return <Shimmer />;

  return (
    <>
      <div className="flex justify-center  m-4">
        <input
          type="text"
          className="border border-solid border-black p-2 m-2 rounded-md"
          placeholder="Search"
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="p-2 m-2 bg-pink-500 text-white rounded-md hover:bg-pink-700"
          onClick={(e) => {
            //  filter data
            const data = filterData(searchText, restaurants);

            // update the state - filteredRestaurant
            setfilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.length == 0 ? (
          <h1>no data found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return <Link to={`/restaurant/${restaurant.restId}`} key={restaurant.restId}><RestaurantCard {...restaurant} /></Link>;
          })
        )}
      </div>
    </>
  );
};

export default Body;
