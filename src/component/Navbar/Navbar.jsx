import { NavLink } from "react-router-dom";
import cssClass from "classnames";

function Navbar({ isFooter }) {
  const showRow = isFooter;
  return (
    <ul
      className={cssClass("justify-between", "mr-5 flex", {
        "flex-col": showRow,
      })}>
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
