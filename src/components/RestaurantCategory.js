import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, index, setShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="w-6/12 my-8 bg-gray-50  mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div
        className=" flex justify-between cursor-pointer bg-gray-100 w-full p-4 hover:bg-slate-200"
        onClick={handleClick}
      >
        <span className="font-bold text-base">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
