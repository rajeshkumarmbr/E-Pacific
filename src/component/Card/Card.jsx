import React from "react";
import MilestonesPage from "../MilestonesPage/MilestonesPage";

function Card({ service }) {
  return (
    <>
      <div className=" w-80 h-80 rounded-lg bg-teal-900 m-5 flex flex-col justify-center items-center">
        <div className="">
          <img
            src={service.img}
            alt="tech-support"
            className={`w-[100px] ${
              MilestonesPage ? " rounded-full" : " rounded-none"
            }`}
          />
        </div>
        <div className=" flex flex-col items-center">
          {service.name && <h3 className="">{service.name}</h3>}
          <p className="w-64">{service.discription} </p>
        </div>
      </div>
    </>
  );
}

export default Card;
