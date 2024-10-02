import React from "react";
import ShoppingItem from "./ShoppingItem";

const Shopping = () => {
  return (
    <div className="bg-gray-200 rounded-md h-full w-[80%] flex justify-center items-center ">
      <div className="w-full h-full grid grid-cols-2 grid-rows-6 lg:grid-cols-3 lg:grid-rows-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <ShoppingItem itemNum={item} image={index} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
