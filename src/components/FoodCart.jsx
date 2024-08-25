import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice/CartSlice";
const FoodCart = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  const handleAddButton = () => {
    dispatch(addToCart({ id, name, price, desc, img, rating, qty: 1 }));
    handleToast(name);
  };

  return (
    <>
      <div className="w-[250px] p-5 bg-white flex flex-col rounded-lg ">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
        />
        <div className="text-sm flex justify-between mt-7">
          <h1>{name}</h1>
          <span className="text-green-500">{price}$</span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
        <div className="flex justify-between ">
          <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400" />
            {rating}
          </span>
          <button
            onClick={handleAddButton}
            className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
export default FoodCart;
