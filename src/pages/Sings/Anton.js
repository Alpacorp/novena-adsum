import * as React from 'react';
import Back from '../../Components/Back';
import './Sings.css';
import backButtonIcon from '../../assets/components/volver.svg';
import Header from '../../Components/Header';

const Anton = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <Back url='/stepseven' src={backButtonIcon} />
        <h2>Anton Tiruliruliru</h2>
        <div className='video'>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/AJlU2aD4Rag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
};

export default Anton;