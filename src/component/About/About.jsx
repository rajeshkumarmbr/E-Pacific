import AboutImg from "../../img/About-us-1024x907.png";

function About() {
  return (
    <>
      <div className="w-full pb-9">
        <div className=" flex  flex-col justify-center items-center pt-4">
          <h1 className=" text-5xl capitalize font-bold p-6"> About us</h1>
          <div className="flex  w-full  ">
            <div className="wow animate__animated animate__fadeInLeft animate__slow w-1/2  flex justify-center items-center ">
              <img src={AboutImg} alt="About img" className=" w-3/5 p-4" />
            </div>
            <div className="wow animate__animated animate__fadeInRight animate__slow w-1/2  flex flex-col items-center">
              <div className="">
                <h1 className=" text-3xl font-medium p-6">
                  An ISO 9001:2015 Certified Company
                </h1>
              </div>
              <div className=" w-[90%] flex flex-col justify-center">
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
