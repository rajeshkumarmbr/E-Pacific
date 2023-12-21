import "./navbar.css";
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
            ` ${isActive ? " active" : ""} ${
              isFooter ? "menu" : ""
            } hover:text-sky-400`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `${isActive ? "active" : ""} ${
              isFooter ? "menu" : ""
            } hover:text-sky-400`
          }>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="services"
          className={({ isActive }) =>
            `${isActive ? "active" : ""} ${
              isFooter ? "menu" : ""
            } hover:text-sky-400`
          }>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `${isActive ? "active" : ""} ${
              isFooter ? "menu" : ""
            } hover:text-sky-400`
          }>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
