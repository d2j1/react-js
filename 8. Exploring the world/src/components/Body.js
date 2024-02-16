import { useState } from "react";
import { restaurantList } from "../config";

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
    return card.name.includes(searchQuery);
  });

  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState(); // here kfc is default value
  const [restaurants, setRestaurants] = useState(restaurantList);

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

            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.restId} />;
        })}
      </div>
    </>
  );
};

export default Body;
