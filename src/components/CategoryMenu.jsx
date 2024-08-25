import React, { useEffect, useState } from "react";
import FoodData from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../redux/cartSlice/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const ListUniqueCategory = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    ListUniqueCategory();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the best food</h3>
        {/* <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden"> */}
        <div className="flex gap-3 my-5">
          <button
            onClick={() => dispatch(changeCategory("All"))}
            className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
                onClick={() => dispatch(changeCategory(category))}
              >
                {category}
              </button>
            );
          })}

          {/* <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Lunch
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Breakfast
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Dinner
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Snacks
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
