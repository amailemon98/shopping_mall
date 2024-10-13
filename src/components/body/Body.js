import React from "react";
import Banner from "../banner/Banner";
import SideBar from "../sideBar/SideBar";
import Shopping from "../shopping/Shopping";
import { Route, Routes } from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Join from "../routes/Join";
import ShoppingDetail from "../routes/ShoppingDetail";

const Body = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full h-full mx-auto">
          <div className="w-full h-[90%] m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/shopping-item/:id" element={<ShoppingDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
