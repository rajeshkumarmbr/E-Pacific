import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import ScrollTop from "./ScrollTop";
import "animate.css";
function App() {
  return (
    <ScrollTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollTop>
  );
}

export default App;
