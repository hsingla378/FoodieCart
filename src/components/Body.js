import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline! Please check your internet.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              let filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
