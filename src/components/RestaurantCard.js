import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // console.log("resData: " + resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 bg-gray-100 w-[250px] rounded-md h-full hover:bg-gray-200"
    >
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="rounded-md mb-2"
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>
          <span className="font-bold">User: </span>
          {loggedInUser}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md m-2 p-2">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
