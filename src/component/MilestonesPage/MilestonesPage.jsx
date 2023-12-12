import React from "react";
import Card from "../Card/Card";
import img1 from "../../img/aadhar-logo-classic-logos-of-india-150x150.jpg";
import img2 from "../../img/MCD-Logo-1-150x150.jpg";
import img3 from "../../img/BSNL-Logo-150x150.jpg";
import img4 from "../../img/DDA-Logo-1-150x150.jpg";
import img5 from "../../img/NDSL-OBC-BANK-150x150.png";
import img6 from "../../img/CSC-logo-150x150.png";

const data = [
  {
    id: 1,
    img: img1,
    discription:
      "In 2016-17 we have successfully enrolled 5,12,342 Aadhaar with Registrar CSC e Governance in the state of Delhi and Haryana.",
  },
  {
    id: 2,
    img: img2,
    discription:
      "Presently empaneled with Municipal Corporation of Delhi as a Service Provider for Operation in Aadhaar Enrolment Activities.",
  },
  {
    id: 3,
    img: img3,
    discription:
      "Presently empaneled with BSNL, Uttar Pradesh for handling Outsourced Customer Service Center which involved Aadhaar Enrolment Activity.",
  },
  {
    id: 4,
    img: img4,
    discription:
      "Presently empaneled with Delhi development Authority as a documentation Agency for PM-UDAY scheme.",
  },
  {
    id: 5,
    img: img5,
    discription:
      "In FY 2017 18, 2018 19 & 2019, 2020 we have successfully enrolled 10,19,882 Aadhaar with Registrar OBC Bank and NSDL E Governance Infrastructure Limited in Pan India.",
  },
  {
    id: 6,
    img: img6,
    discription:
      "In FY 2016 17 more than 25 Lacs Aadhaar with Registrar CSC e Governance in the state of U.P, Bihar & W.B and 5,12,342 Aadhaar in the state of Delhi and Haryana.",
  },
];

function MilestonesPage() {
  return (
    <>
      <div className="">
        <h1 className="text-4xl">MilestonesPage</h1>
      </div>
      <div className="flex ">
        {data.map((data) => {
          return <Card service={data} />;
        })}
      </div>
    </>
  );
}

export default MilestonesPage;
