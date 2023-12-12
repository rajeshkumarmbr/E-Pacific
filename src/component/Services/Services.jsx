import React from "react";
import Card from "../Card/Card";
import img1 from "../../img/tech-support.png";
import img2 from "../../img/app-development.png";
import img3 from "../../img/man-power.png";
import img4 from "../../img/b2c-services.png";

const data = [
  {
    id: 1,
    img: img1,
    name: "tech support",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: img2,
    name: "app development",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: img3,
    name: "man power",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: img4,
    name: "B2C services",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Services() {
  return (
    <>
      <div className="w-full h-[85vh] bg-slate-600 ">
        <div className=" flex flex-col items-center">
          <div className="">
            <h3 className=" text-2xl font-semibold uppercase mt-5">
              OUR SERVICES
            </h3>
          </div>
          <div className="">
            <h1 className=" text-7xl font-medium">The one point solution!!</h1>
          </div>
        </div>
        <div className="flex justify-evenly w-full h-auto p-12">
          {data.map((dataItem) => {
            return <Card key={dataItem.id} service={dataItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
