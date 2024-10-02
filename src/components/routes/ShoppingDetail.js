import React from "react";
import { useParams } from "react-router-dom";

const ShoppingDetail = () => {
  const myParam = useParams().id;
  // console.log(myParam); // 내 id ex: 4

  // id를 이용하여 특정 item을 fetch 해와서
  // 그 정보를 이용하여 상품 내용을 채운다.

  return (
    <div className="w-full h-full bg-pink-300">
      <div className="flex h-[400px] w-[700px] justify-center items-center">
        <img alt="이미지입니다" className="w-[40%] h-[30%] bg-red-400" />
        <div className="w-[40%] h-[30%] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default ShoppingDetail;
