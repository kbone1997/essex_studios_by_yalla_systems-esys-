import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json"
        );
        if (!response.ok) throw new Error("Failed to fetch restaurants");
        const data = await response.json();
        setRestaurants(data.body.restaurants);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div className="restaurants"><div className="container"><p>Loading...</p></div></div>;
  if (error) return <div className="restaurants"><div className="container"><p>Error: {error}</p></div></div>;

  return (
    <div className="restaurants">
      <div className="container">
        <p className="restaurants__count">{restaurants.length} Restaurants</p>
        <div className="restaurants__list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name.length > 20 ? restaurant.name.substring(0, 20) + "..." : restaurant.name}
              imageUrl={restaurant.image}
              price={restaurant.price}
              tags={restaurant.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;