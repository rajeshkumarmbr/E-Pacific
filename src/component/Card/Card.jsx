import React from "react";

function Card({ service }) {
  return (
    <>
      <div className=" w-80 h-80 rounded-lg bg-teal-900 m-5 flex flex-col justify-center items-center">
        <div className="">
          <img src={service.img} alt="tech-support" className=" w-[100px]" />
        </div>
        <div className=" flex flex-col items-center">
          {service.nane && <h3 className="">{service.name}</h3>}
          <p className="w-64">{service.discription} </p>
        </div>
      </div>
    </>
  );
}

export default Card;
