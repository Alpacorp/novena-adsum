import * as React from 'react';
import Back from '../../Components/Back';
import backButtonIcon from '../../assets/components/volver.svg';
import Header from '../../Components/Header';

const Tutaina = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <Back url='/stepseven' src={backButtonIcon} />
        <h2>Tutaina</h2>
        <div className="video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/zHxg73ppMbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
};

export default Tutaina;