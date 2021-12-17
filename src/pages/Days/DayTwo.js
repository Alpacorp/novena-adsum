import * as React from 'react';
import { daytwo } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const DayTwo = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={daytwo} textImage='day two' />
        <h2>Día Segundo</h2>
        <Slide />
        <div className="stepText">
          <p>
            El verbo eterno se halla a punto de tomar su naturaleza creada en la santa casa de Nazaret, en donde moraban María y José.
          </p>
          <p>
            Cuando la sombra del decreto divino vino a deslizarse sobre ella, María estaba sola y engolfada en la oración.
          </p>
          <p>
            Pasaba las silenciosas horas de la noche en la unión más estrecha con Dios; y mientras oraba, el Verbo tomó posesión de su morada creada.
          </p>
          <p>
            Sin embargo, no llegó inopinadamente: antes de presentarse envió a un mensajero, que fue Arcángel San Gabriel para pedir a María de parte de Dios su consentimiento para la encarnación.
          </p>
          <p>
            El creador no quiso efectuar ese gran misterio sin la aquiescencia de su criatura.
          </p>
          <p>
            Aquel momento fue muy solemne: era potestativo en María rehusar. Con qué adorables delicias, con qué inefable complacencia aguardaría la Santísima Trinidad a que María abriese los labios y pronunciase el 'sí' que debió ser suave melodía para sus oídos, y con el cual se conformaba su profunda humildad a la omnipotente voluntad divina.
          </p>
          <p>
            La Virgen Inmaculada ha dado su asentimiento. El arcángel ha desaparecido.
          </p>
          <p>
            Dios se ha revestido de una naturaleza creada; la voluntad eterna está cumplida y la creación completa.
          </p>
          <p>
            En las regiones del mundo angélico estalla el júbilo inmenso, pero la Virgen María ni le oía ni le hubiese prestado atención a él.
          </p>
          <p>
            Tenía inclinada la cabeza y su alma estaba sumida en el silencio que se asemejaba al de Dios.
          </p>
          <p>
            El Verbo se había hecho carne, y aunque todavía invisible para el mundo, habitaba ya entre los hombres que su inmenso amor había venido a rescatar.
          </p>
          <p>
            No era ya sólo el Verbo eterno; era el Niño Jesús revestido de la apariencia humana, y justificando ya el elogio que de Él han hecho todas las generaciones en llamarle el más hermoso de los hijos de los hombres.
          </p>
        </div>
      </div>
    </>
  )
};

export default DayTwo;