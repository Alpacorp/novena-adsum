import * as React from 'react';
import { threePage } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const StepThree = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={threePage} textImage='step three' />
        <h2>
          Oración a la Santísima Virgen
        </h2>
        <Slide />
        <div className='stepText'>
          <p>
            Soberana María, que por vuestras grandes virtudes, y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiese por madre suya, os suplico que vos misma preparéis y dispongáis mi alma, y la de todos los que en este tiempo hicieren esta novena, para el nacimiento espiritual de vuestro adorado Hijo.
          </p>
          <p>
            ¡Oh dulcísima Madre! Comunicadme algo del profundo recogimiento y divina ternura con que le aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad.
          </p>
          <p>Amén</p>
          <small>Se reza tres veces el Avemaría</small>
        </div>
      </div>
    </>
  );
}

export default StepThree;