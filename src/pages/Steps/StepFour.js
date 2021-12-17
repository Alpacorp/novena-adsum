import React from 'react';
import { fourPage } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const StepFour = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={fourPage} textImage='step four' />
        <h2>
          Oración a San José
        </h2>
        <Slide />
        <div className='stepText'>
          <p>
            ¡Oh Santísimo José, esposo de María y padre adoptivo de Jesús!, infinitas gracias doy a Dios porque os escogió para tan altos ministerios y os adornó con todos los dones proporcionados a tan excelente grandeza.
          </p>
          <p>
            Os ruego, por el amor que tuvisteis al divino Niño, me abraséis en fervorosos deseos de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le gozo en el Cielo.
          </p>
          <p>Amén</p>
          <small>Padrenuestro, Avemaría y Gloria</small>
        </div>
      </div>
    </>
  );
}

export default StepFour;