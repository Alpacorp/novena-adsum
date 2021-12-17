import * as React from 'react';
import { sevenPage } from '../../assets';
import { Link } from 'react-router-dom';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';

const StepSeven = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={sevenPage} textImage='step seven' />
        <h2>Elige un villancico para cantar</h2>
        <div className='sings'>
          <Link to='/anton' id='orangeAdsum'>
            Anton Tiruliruliru
          </Link>
          <Link to='/tutaina' id='grayAdsum'>
            Tutaina
          </Link>
          <Link to='/nanita' id='orangeAdsum'>
            La Nanita Nana
          </Link>
          <Link to='/campana' id='grayAdsum'>
            Campana sobre campana
          </Link>
          <Link to='/peces' id='orangeAdsum'>
            Los peces en el río
          </Link>
        </div>
      </div>
    </>
  )
};

export default StepSeven;