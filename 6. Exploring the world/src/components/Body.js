import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import Shimmer from "./Shimmer";

// config driven ui

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

function filterData(searchQuery, restaurants) {
  const data = restaurants.filter((card) => {
    console.log(card);
    return card.name.toLowerCase()?.includes(searchQuery.toLowerCase());
  });

  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState(); // here kfc is default value
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurant, setfilteredRestaurant] = useState(restaurantList);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch("https://animechan.xyz/api/quotes");
    const dataInJson = await data.json();
    setRestaurants(dataInJson);
    setfilteredRestaurant(dataInJson);
    console.log(dataInJson);
  }

  // early return -> it does not let the component to render.
  if (restaurants.length == 0) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-btn"
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
      <div className="restaurant-list">
        {filteredRestaurant.length == 0 ? (
          <h1>no data found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return <RestaurantCard {...restaurant} key={restaurant.restId} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
