import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";

  
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();


  const handleClearCart= () => {
  
    dispatch(clearCart());
  }

  return (
    <div>
      <h1 className="text-2xl font-bold"> Cart page</h1>
         <p> This is namaste react cart page of the course</p>
         <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleClearCart}>Clear Cart</button>
      <h2> Cart items: {cartItems.length} </h2>
      <ul className="list-disc pl-5">
        {cartItems.map((item, index) => (
          <li className="text-lg" key={index}>{item}</li>
        ))}
      </ul>
   
    </div>
  );
};

export default Cart;
