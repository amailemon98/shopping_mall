import React from "react";
import Banner from "../banner/Banner";
import SideBar from "../sideBar/SideBar";
import Shopping from "../shopping/Shopping";
import { Route, Routes } from "react-router-dom";
import Login from "../routes/Login";

const Body = () => {
  const testSendData = "배너입니다.";
  return (
    <div>
      {/* <Routes> 여기 나중에 수정바람
        <Route path="/login" element={<Login />} />
      </Routes> */}
      <div className="w-screen h-full">
        <div className="w-[70%] h-full mx-auto pt-16 bg-green-200">
          <div className="w-[90%] h-[90%] m-auto bg-purple-400">
            <div>
              <Banner testSendData={testSendData} />
            </div>
            <div className="flex h-[900px] justify-between items-center w-[90%] m-auto">
              <SideBar />
              <Shopping />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
