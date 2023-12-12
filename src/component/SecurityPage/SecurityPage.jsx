import React from "react";
import SupportImg from "../../img/support-1-1536x1333.jpg";

function SecurityPage() {
  return (
    <>
      <div className=" flex w-full h-[85vh] p-7">
        <div className=" w-1/2 flex flex-col items-center mt-7">
          <div className="flex flex-col items-center text-5xl leading-normal font-medium">
            <h2 className="">Support and </h2>
            <h2> Security</h2>
          </div>
          <div className=" mt-12 flex items-center text-justify">
            <p className=" w-[400px] leading-8">
              We are equipped with essential IT support team for resolving the
              day-to-day technical issues. Our IT Team will provide Help Desk
              facility and Technical Support to avoid routine hurdles to smooth
              process. A dedicated team for monitoring and the implementation
              for the projects. We maintain the secrecy & confidentiality of all
              records and information.
            </p>
          </div>
        </div>
        <div className=" w-1/2">
          <img src={SupportImg} alt="Support Img" className="w-[550px]" />
        </div>
      </div>
    </>
  );
}

export default SecurityPage;
