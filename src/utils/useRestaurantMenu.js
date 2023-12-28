import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json?.data);
  };

  //return restaurant menu
  return resInfo;
};

export default useRestaurantMenu;
