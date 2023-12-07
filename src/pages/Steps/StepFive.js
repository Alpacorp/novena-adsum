import React, { useState } from "react";
import DayImgDate from "../../Components/DayImgDate";
import Slide from "../../Components/Slide";
import { data } from "../../Data/data.json";
import { afterIcon, fivePage, back } from "../../assets";
import Header from "../../Components/Header";

const StepFive = () => {
  const [counter, setCounter] = useState(0);

  let dataInfo = data.filter((item) => item.id === counter);

  const next = () => {
    setCounter(counter + 1);
  };

  const before = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={fivePage} textImage="step five" />
        <h2>Los Gozos</h2>
        <Slide />
        {counter === 0 ? "" : `${counter} de 12`}
        <br />
        <div className="stepText">
          <p className="gozos">
            {!dataInfo ||
            dataInfo === "undefined" ||
            dataInfo === "" ||
            dataInfo.length === 0
              ? ""
              : dataInfo[0].message}
          </p>
          <br />
          <small>!Ven a nuestras almas,</small>
          <small>ven no tardes tanto!</small>
          <br />
          <div className="buttons">
            {counter <= 0 ? (
              ""
            ) : (
              <button onClick={before} className="containerButton">
                <img src={back} className="buttonBefore" alt="icon before" />
              </button>
            )}
            {counter < 12 ? (
              <button onClick={next} className="containerButton">
                <img src={afterIcon} className="buttonAfter" alt="icon after" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
