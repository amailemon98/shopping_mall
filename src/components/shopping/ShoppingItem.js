import React from "react";
import { Link } from "react-router-dom";

const ShoppingItem = ({ itemNum, image }) => {
  return (
    <Link to={`/shopping-item/${itemNum}`}>
      <div className="w-[70%] h-[90%] rounded-md flex flex-col items-center overflow-hidden mx-auto my-auto">
        <div className="w-full h-[80%] bg-gray-300 text-center">
          {image + 1}번째 그림
        </div>
        <div className="w-full h-[20%] bg-gray-400 text-center">
          {itemNum}번 아이템
        </div>
      </div>
    </Link>
  );
};

export default ShoppingItem;
