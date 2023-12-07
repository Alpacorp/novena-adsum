import * as React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
import { one, two, three, four, five, six, seven, adsumRedes } from "../assets";
import BrandLogo from "../Components/BrandLogo";
import Header from "../Components/Header";
import NovenaHorizontal from "../Components/NovenaHorizontal";
import FacebookIcon from "../Components/FacebookIcon";
import YouTubeIcon from "../Components/YouTubeIcon";
import LinkedInIcon from "../Components/LinkedInIcon";

const Home = () => {
  return (
    <>
      <Header show={false} />
      <div className="brandZone">
        <BrandLogo src={adsumRedes} />
        <div className="socialMedia">
          <a
            href="https://www.facebook.com/Heimcore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/@HeimcoreTechfrominside"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/heimcore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <NovenaHorizontal />
      </div>
      <p className="instructive">Sigue cada paso y reza en familia</p>
      <div className="mainMenu">
        <Link to="/stepone" className="menuOption">
          <img src={one} alt="step one" />
        </Link>
        <Link to="/steptwo" className="menuOption">
          <img src={two} alt="step two" />
        </Link>
        <Link to="/stepthree" className="menuOption">
          <img src={three} alt="step three" />
        </Link>
        <Link to="/stepfour" className="menuOption">
          <img src={four} alt="step four" />
        </Link>
        <Link to="/stepfive" className="menuOption">
          <img src={five} alt="step five" />
        </Link>
        <Link to="/stepSix" className="menuOption">
          <img src={six} alt="step six" />
        </Link>
        <Link to="/stepseven" className="menuOption">
          <img src={seven} alt="step seven" />
        </Link>
      </div>
    </>
  );
};

export default Home;
