import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo?.cards[0]?.card?.card?.info);

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className=" m-4 flex justify-center">
      <div className="bg-gray-100 p-4 flex justify-between items-center rounded-md w-fit max-w-[900px]">
        <div className="flex flex-col gap-4 p-4 text-center">
          <img
            alt="res-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            className="rounded-md mb-2 max-w-96"
          />
          <h1 className="font-extrabold text-2xl">{name}</h1>
          <p className="text-xl">{cuisines.join(", ")}</p>
          <p className="text-lg">{costForTwoMessage}</p>
        </div>
        <div className=" flex flex-col gap-4 p-4">
          <h2 className="font-bold text-2xl">Menu</h2>
          <ul className="flex flex-col gap-1">
            {itemCards.map((item) => {
              return (
                <li key={item.card.info.id}>
                  {item.card.info.name} - Rs.{" "}
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
