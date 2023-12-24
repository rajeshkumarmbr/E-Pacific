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
      "Tech support services provide expert assistance for resolving technical issues, ensuring smooth operation of software, hardware, and networks with customer satisfaction as a priority.",
  },
  {
    id: 2,
    img: img2,
    name: "app development",
    discription:
      "App development involves designing, coding, and testing software applications for mobile or web platforms, addressing user needs and functionality requirements.",
  },
  {
    id: 3,
    img: img3,
    name: "man power",
    discription:
      "Manpower services involve providing personnel for various tasks, addressing workforce needs through recruitment, staffing, and workforce management solutions for businesses.",
  },
  {
    id: 4,
    img: img4,
    name: "B2C services",

    discription:
      "B2C (Business-to-Consumer) services directly cater to individual consumers, offering products or services for personal use or consumption.",
  },
];

function Services() {
  return (
    <>
      <div className="w-full p-5  ">
        <div className=" flex flex-col  items-center">
          <div className="h-full  flex items-center">
            <h3 className=" text-2xl font-semibold uppercase ">OUR SERVICES</h3>
          </div>
          <div className="h-full ">
            <h1 className="wow animate__animated animate__zoomIn animate__slow text-7xl font-medium p-5">
              The one point solution!!
            </h1>
          </div>
        </div>
        <div className="  flex justify-evenly w-full p-4 ">
          {data.map((dataItem) => {
            return <Card key={dataItem.id} service={dataItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
