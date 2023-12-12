import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// const [isHeader, setIsHeader] = useState(true);

function Header() {
  return (
    <header className=" sticky z-50 top-0">
      <nav className="w-full h-[15vh] bg-sky-500 flex justify-between items-center">
        <div className="text-white text-4xl w-1/4 ml-5">
          <h1 className="">Logo</h1>
        </div>
        <div className=" w-2/4 text-white">
          <Navbar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
