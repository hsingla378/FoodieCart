import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect() called");
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="font-medium header flex justify-between items-center px-6 py-2 shadow-md text-white mb-4 bg-green-600">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className=" flex gap-6">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
