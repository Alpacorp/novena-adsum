import * as React from "react";
import { adsum, mainFamily } from "../assets";
import BrandLogo from "./BrandLogo";
import "./Components.css";
import NovenaImage from "./NovenaImage";

const Intro = () => {
  return (
    <div className="introModal">
      <div className="introContent">
        <BrandLogo src={adsum} />
        <div className="familyImage">
          <img src={mainFamily} alt="novena familiar" />
        </div>
        <div className="novenaImage">
          <NovenaImage />
        </div>
      </div>
    </div>
  );
};

export default Intro;
