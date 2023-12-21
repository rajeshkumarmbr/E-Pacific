import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location]);
  return <>{props.children}</>;
}

export default ScrollTop;
