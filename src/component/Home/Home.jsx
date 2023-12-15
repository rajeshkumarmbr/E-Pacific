import { useEffect, useState } from "react";
import Services from "../Services/Services";
import SecurityPage from "../SecurityPage/SecurityPage";
import MilestonesPage from "../MilestonesPage/MilestonesPage";

function Home() {
  const [roundCard, setRoundCard] = useState(false);
  useEffect(() => {
    setRoundCard(true);
  }, [roundCard]);
  return (
    <>
      {/* <div className="w-full bg-amber-700">Home Page</div> */}

      <Services roundCard={roundCard} />
      <SecurityPage />
      <MilestonesPage roundCard={roundCard} />
    </>
  );
}

export default Home;
