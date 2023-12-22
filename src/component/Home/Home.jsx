import { useEffect, useState } from "react";
import Services from "../Services/Services";
import SecurityPage from "../SecurityPage/SecurityPage";
import MilestonesPage from "../MilestonesPage/MilestonesPage";
import HeroImg from "../../img/Home-page-scaled.jpg";
import { Link } from "react-router-dom";
import "animate.css";

function Home() {
  const [roundCard, setRoundCard] = useState(false);
  useEffect(() => {
    setRoundCard(true);
  }, [roundCard]);
  return (
    <>
      <div className="w-full relative">
        <div className=" w-full  ">
          <img src={HeroImg} alt="Hero Img" className=" w-full h-[520px] " />
        </div>
        <div className=" w-full absolute top-1/2 left-0 transform -translate-y-1/2 ">
          <h1 className="wow animate__animated animate__fadeInUp animate__slow text-5xl font-semibold text-[#695FE7] pb-4 pl-16">
            Welcome To
            <br />
            <span className="">Epacific Technologies</span>
          </h1>
          <p className="wow animate__animated animate__fadeInUpBig animate__slow font-semibold pl-16">
            Empower unemployed youth by providing
            <br />
            them with business opportunities
          </p>
          <div className="w-full text-center mt-10">
            <Link to="contact">
              <button className="wow animate__animated animate__zoomIn animate__slow bg-yellow-400 rounded p-4 font-medium hover:bg-yellow-500">
                Work with us ?
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Services roundCard={roundCard} />
      <SecurityPage />
      <MilestonesPage roundCard={roundCard} />
    </>
  );
}

export default Home;
