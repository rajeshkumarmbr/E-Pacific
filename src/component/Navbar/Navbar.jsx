import { NavLink } from "react-router-dom";
import { useState } from "react";
import cssClass from "classnames";

function Navbar({ isHeader }) {
  const newClass = { "flex-row": !isHeader };
  return (
    <ul className={cssClass("justify-between", "mr-5", newClass)}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "text-blue-700" : "text-white"} hover:text-gray-600`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `${isActive ? "text-blue-700" : "text-white"} hover:text-gray-600`
          }>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="services"
          className={({ isActive }) =>
            `${isActive ? "text-blue-700" : "text-white"} hover:text-gray-600`
          }>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `${isActive ? "text-blue-700" : "text-white"} hover:text-gray-600`
          }>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
