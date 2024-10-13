import React from "react";
import { useParams } from "react-router-dom";

const ShoppingDetail = () => {
  const myParam = useParams().id;

  return (
    <div className="w-screen h-full bg-pink-300">
      <div className="flex h-[80%] w-[80%] mx-auto">
        <img alt="이미지입니다" className="w-[60%] h-[500px] bg-red-400" />
        <div className="w-[60%] h-[500px] bg-blue-400">
          <div>상품명: 상품명</div>
          <div>상품코드: {myParam}</div>
          <div>가격: 가격</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetail;
