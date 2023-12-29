import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // console.log("resData: " + resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="m-4 p-4 bg-gray-100 w-[250px] rounded-md h-full hover:bg-gray-200">
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
      </div>
    </div>
  );
};

export default RestaurantCard;
