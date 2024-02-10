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
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.cards.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.restId} />;
      })}
    </div>
  );
};

export default Body;
