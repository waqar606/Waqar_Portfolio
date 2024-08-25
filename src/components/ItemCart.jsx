import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  decrementQty,
  inrementQty,
  removeFromCart,
} from "../redux/cartSlice/CartSlice";
import { useDispatch } from "react-redux";

import toast, { Toaster } from "react-hot-toast";
const ItemCart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFromCart({ id, img, name, price, qty }));

    toast.error(`Your ${name} is deleted.`);
  };
  const handleDecrement = () => {
    {
      qty > 1 ? dispatch(decrementQty({ id })) : (qty = 1);
    }
  };
  const handleIncrement = () => {
    dispatch(inrementQty({ id }));
  };
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 w-full  lg:w-[260px] ml-2">
      <MdDelete
        onClick={handleDelete}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px] " />
      <div className="leading-5">
        <h2 className="font-medium text-gray-800">{name.slice(0, 10)}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>{" "}
          <div className="flex justify-center items-center gap-2 absolute right-7">
            {" "}
            <AiOutlineMinus
              onClick={handleDecrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>{" "}
            <AiOutlinePlus
              onClick={handleIncrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
