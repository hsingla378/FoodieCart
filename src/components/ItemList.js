import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  //   console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between items-center"
          >
            <div className="w-9/12">
              <div className="py-2 font-semibold">
                <span cla>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {parseInt(item.card.info.defaultPrice / 100) ||
                    parseInt(item.card.info.price / 100)}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative flex justify-center object-cover">
              <img
                className="w-full rounded-lg shadow-lg "
                src={CDN_URL + item.card.info.imageId}
              ></img>
              <div className="absolute flex justify-center bottom-0">
                <button
                  className="bg-black text-white p-2 rounded-lg text-xs shadow-lg "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
