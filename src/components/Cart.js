import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="hover:scale-105 mt-6 mb-10 py-2 px-6 font-bold border border-black  rounded-lg bg-black text-white shadow-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <p>🥲 Cart is empty. Add items to the cart!</p>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
