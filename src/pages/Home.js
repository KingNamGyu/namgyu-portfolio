import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import CssBaseline from "@mui/material/CssBaseline";
const Home = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <div className="Home">
        <div className="main">
          <FontAwesomeIcon
            className="faCompass1"
            icon={faCompass}
            size="7x"
            spin
          />
          <div className="name">-김남규-</div>
          <h1>웹 포트폴리오</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
