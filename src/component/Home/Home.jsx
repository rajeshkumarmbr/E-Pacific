import React from "react";
import Services from "../Services/Services";
import SecurityPage from "../SecurityPage/SecurityPage";

function Home() {
  return (
    <>
      <div className="w-full h-[85vh] bg-slate-600">Home Page</div>

      <Services />
      <SecurityPage />
    </>
  );
}

export default Home;
