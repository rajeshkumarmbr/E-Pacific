import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";

function App() {

  return (
    <>
      <Header  />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
