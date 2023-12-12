import React from "react";
import Services from "../Services/Services";
import SecurityPage from "../SecurityPage/SecurityPage";
import MilestonesPage from "../MilestonesPage/MilestonesPage";

function Home() {
  return (
    <>
      <div className="w-full h-[85vh] bg-slate-600">Home Page</div>

      <Services />
      <SecurityPage />
      <MilestonesPage />
    </>
  );
}

export default Home;
