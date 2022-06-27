import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Banner = () => {
  const [style, setStyle] = useState("nav-menu");

  const Open = () => {
    style = setStyle("nav-menu1");
  };
  const Close = () => {
    style = setStyle("nav-menu");
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-title">
          <Link to="/">
            <a>KNG's Portfolio</a>
          </Link>
        </div>

        <ul className={style}>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <a>About me</a>
            </Link>
          </li>

          <li>
            <Link to="/project">
              <a>Projects</a>
            </Link>
          </li>

          <li>
            <a href="https://github.com/KingNamGyu" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <a>
            <a className="toggleBtn" onClick={Close}>
              <FontAwesomeIcon icon={faClose} size="2x" />
            </a>
          </a>
        </ul>
        <a className="toggleBtn1" onClick={Open}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </a>
      </nav>
    </>
  );
};

export default Banner;
