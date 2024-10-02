import React from "react";
import Banner from "../banner/Banner";
import SideBar from "../sideBar/SideBar";
import Shopping from "../shopping/Shopping";

const Home = () => {
  const testSendData = "배너입니다.";
  return (
    <div>
      <div>
        <Banner testSendData={testSendData} />
      </div>
      <div className="flex flex-col lg:flex-row h-[200vw] lg:h-screen justify-between items-center w-[90%] m-auto py-10 gap-4">
        <SideBar />
        <Shopping />
      </div>
    </div>
  );
};

export default Home;
