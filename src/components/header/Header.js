import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="h-24 w-full bg-gray-400 flex justify-between items-center pl-4">
        <Link to={"/"}>HOME</Link>
      </div>
    </div>
  );
};

export default Header;
