import * as React from 'react';
import { sixPage } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const StepSix = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={sixPage} textImage='step six' />
        <h2>Oración al Niño Jesús</h2>
        <Slide />
        <div className='stepText'>
          <p>
            Acordaos, ¡oh dulcísimo Niño Jesús! que dijisteis a la venerable Margarita del Santísimo Sacramento, y en persona suya a todos vuestros devotos, estas palabras tan consoladoras para nuestra pobre humanidad, agobiada y doliente.
          </p>
          <p>
            Todo lo que quieras pedir, pídelo por los méritos de mi infancia y nada te será negado
          </p>
          <p>
            Llenos de confianza en Vos, oh Jesús, que sois la misma verdad, venimos a exponeros toda nuestra miseria.
          </p>
          <p>
            Ayudadnos a llevar una vida santa, para conseguir una eternidad bienaventurada.
          </p>
          <p>
            Concedednos, por los méritos infinitos de vuestra encarnación y de vuestra infancia, la gracia de la cual necesitamos tanto.
          </p>
          <p>Nos entregamos a Vos, oh Niño omnipotente, seguros de que no quedará frustrada nuestra esperanza, y de que en virtud de vuestra divina promesa, acogeréis y despacharéis favorablemente nuestra súplica.</p>
          <small>Amén</small>
        </div>
      </div>
    </>
  )
};

export default StepSix;