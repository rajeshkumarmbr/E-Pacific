import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="w-full bg-[#695FE7] text-white">
        <div className="text-center pt-5 pb-10">
          <h1 className=" text-7xl capitalize font-bold ">contact us</h1>
        </div>
        <div className="w-full flex justify-evenly text-center ">
          <div className=" ">
            <h1 className="">find us here</h1>
            <NavLink
              to="https://maps.app.goo.gl/AmvkUtAy8F83gpqj8"
              target="_blank"
              className={` text-white hover:text-sky-400 inline-block mb-3`}>
              <div className="flex justify-between">
                <FaLocationDot className="text-2xl mr-2" />
                <p>
                  C - 76, Sector 63 <br /> Noida U.P. 201307
                </p>
              </div>
            </NavLink>
          </div>
          <div className=" flex flex-col">
            <h1 className="">Get In Touch</h1>
            <Link
              to="tel:+91-120-4109041"
              className="text-white hover:text-sky-400">
              <FaPhone className="inline-block mr-2 text-2xl" /> 0120-4109041
            </Link>
            <Link
              to="mailto:info@epacifictechnologies.com"
              className="text-white hover:text-sky-400">
              <IoIosMail className="inline-block mr-2 text-2xl" />
              info@epacifictechnologies.com
            </Link>
          </div>
          <div className="">
            <h1 className="">Meeting Hours</h1>
            <p className="">Mon- Sat: 10am- 6pm</p>
          </div>
        </div>
        <div className="  ">
          <form onSubmit className="flex justify-evenly  flex-wrap">
            <div className="">
              <input
                type="text"
                id="name"
                className="p-2 focus:outline-none border-b-2 border-red-600"
                placeholder="Enter Full Name-"
              />
            </div>
            <div className="">
              <input
                type="text"
                id="mobile"
                className=""
                placeholder="Enter Mobile Name-"
              />
            </div>
            <div className=" ">
              <input
                type="email"
                id="email"
                className=""
                placeholder="Enter Email Name-"
              />
            </div>
            <div className=" ">
              <textarea
                name="massage"
                id="massage"
                cols="30"
                rows="5"
                className=""
                placeholder="Enter Massage"
              />
            </div>
            <div className=" ">
              <button type="submit" className="p-5 bg-yellow-400">
                Sand
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
