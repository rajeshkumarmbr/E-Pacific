import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/epacific-logo1-1.png";
import Navbar from "../Navbar/Navbar";
// import loc from "https://maps.app.goo.gl/AmvkUtAy8F83gpqj8";
function Footer() {
  return (
    <footer className="w-full h-[35vh] bg-sky-500 ">
      <div className=" flex justify-around items-center">
        <div className="">
          <div className="">
            <img src={logo} alt="Logo" className=" w-24 rounded-md" />
          </div>
          <div className=" ">
            <p className=" w-48">
              We’re a B2B and Manpower Company of Noida. From strategy to
              implementation, we’re here to help make your work simple.
            </p>
          </div>
        </div>
        <div className=" flex flex-col ">
          <h3 className="">Quick Links</h3>
          <div className=" w-2/4 text-white">
            <Navbar />
          </div>
        </div>
        <div className=" flex flex-col text-white">
          <div className="">
            <h3 className="">Contact Info</h3>
          </div>
          <NavLink
            to="https://maps.app.goo.gl/AmvkUtAy8F83gpqj8"
            target="_blank"
            className={`text-white hover:text-slate-600`}>
            C - 76, Sector 63 Noida,
            <br /> U.P. 201307
          </NavLink>
          <Link to="tel:+91-120-4109041" className=" hover:text-white">
            0120-4109041
          </Link>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4040640850167!2d77.38244707439522!3d28.617649584758304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef26e15c97df%3A0xe942bc7e118c093f!2sEpacific%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1702289989289!5m2!1sen!2sin"
            width="250"
            height="180"
            loading="lazy">
            {/* // referrerpolicy="no-referrer-when-downgrade" */}
          </iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
