import React from "react";
import AboutImg from "../../img/About-us-1024x907.png";

function About() {
  return (
    <>
      <div className="w-full h-[85vh] bg-amber-800">
        <div className=" flex  flex-col justify-center items-center pt-4">
          <h1 className=" text-5xl capitalize font-bold"> About us</h1>
          <div className="flex  w-full  ">
            <div className=" w-1/2 bg-zinc-600 h-[400px] flex justify-center items-center ">
              <img src={AboutImg} alt="About img" className=" w-3/5" />
            </div>
            <div className=" w-1/2 bg-green-900 h-[400px] flex flex-col items-center">
              <div className="">
                <h1 className=" text-3xl font-medium">
                  An ISO 9001:2015 Certified Company
                </h1>
              </div>
              <div className=" flex flex-col justify-between h-full">
                <p className="">
                  We came into existence in 2015 as a Private Limited Firm, to
                  facilitate the delivery of public platform services and
                  schemes focused for the betterment of ordinary people.
                </p>
                <p className="">
                  We are one of the best leading firms and having expertise in
                  the field of IT services, manpower, Software Development, e
                  Governance projects, Training & Skill Development, and B2B
                  Services for rural and urban areas.
                </p>
                <p className="">
                  We are registered in Startup India through Govt. of India,
                  Ministry of Commerce & Industry. Empaneled with Various Govt
                  Department for e Governance Projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
