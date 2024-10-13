import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <footer className="h-64 bg-gray-600 w-full flex flex-col justify-center items-center">
      <div className="flex font-bold text-xl text-slate-400 gap-5">
        <div className="hover:text-slate-500">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="hover:text-slate-500">
          <Link to={"help"}>Contact Us</Link>
        </div>
        <div className="hover:text-slate-500">
          <Link to={"join"}>Sign up</Link>
        </div>
        <div className="hover:text-slate-500">
          <Link to={"login"}>Login</Link>
        </div>
      </div>
      <div className="h-[20%] w-[50%] gap-10 flex justify-center items-center"></div>
      <div>
        <p
          className="cursor-pointer text-center text-lg text-slate-400 font-bold"
          onClick={() => {
            setOpenInfo(!openInfo);
          }}
        >
          Information
        </p>

        {openInfo && (
          <div className="text-center text-sm text-slate-500 font-bold">
            <p>이준형 서경하</p>
            <p>준경팀</p>
          </div>
        )}
      </div>
      <div className="text-lg text-slate-500 font-bold">준경팀</div>
    </footer>
  );
};

export default Footer;
