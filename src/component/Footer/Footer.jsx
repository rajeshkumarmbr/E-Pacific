import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/epacific-logo1-1.png";
import Navbar from "../Navbar/Navbar";
// import loc from "https://maps.app.goo.gl/AmvkUtAy8F83gpqj8";
function Footer() {
  const [isFooter, setIsFooter] = useState(false);
  useEffect(() => {
    setIsFooter(true);
  }, []);

  return (
    <footer className="w-full   ">
      <div className=" flex justify-around pt-4">
        <div className=" p-5">
          <div className="text-center">
            <img src={logo} alt="Logo" className=" w-24 rounded-md" />
          </div>
          <div className=" p-5 text-center">
            <p className=" w-48">
              We’re a B2B and Manpower Company of Noida. From strategy to
              implementation, we’re here to help make your work simple.
            </p>
          </div>
        </div>
        <div className=" flex flex-col pt-10">
          <h3 className="">Quick Links</h3>
          <div className=" text-[#695FE7] ">
            <Navbar isFooter={isFooter} />
          </div>
        </div>
        <div className=" flex flex-col pt-10 ">
          <div className="">
            <h3 className="">Contact Info</h3>
          </div>
          <NavLink
            to="https://maps.app.goo.gl/AmvkUtAy8F83gpqj8"
            target="_blank"
            className={` text-[#695FE7] hover:text-sky-400`}>
            C - 76, Sector 63 Noida,
            <br /> U.P. 201307
          </NavLink>
          <Link
            to="tel:+91-120-4109041"
            className="text-[#695FE7] hover:text-sky-400">
            0120-4109041
          </Link>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4040640850167!2d77.38244707439522!3d28.617649584758304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef26e15c97df%3A0xe942bc7e118c093f!2sEpacific%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1702289989289!5m2!1sen!2sin"
            width="320"
            height="210"
            loading="lazy">
            {/* // referrerpolicy="no-referrer-when-downgrade" */}
          </iframe>
        </div>
      </div>
      <div className=" text-white text-center p-3 bg-[#695FE7]  ">
        <p className=" text-xs ">
          2023 COPYRIGHT ©
          <Link to="/" className=" hover:text-slate-950">
            EPACIFIC TECHNOLOGIES.
          </Link>
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;
