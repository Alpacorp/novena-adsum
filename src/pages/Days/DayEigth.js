import * as React from 'react';
import { dayeight } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const DayEigth = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={dayeight} textImage='day eight' />
        <h2>Día Octavo</h2>
        <Slide />
        <div className="stepText">
          <p>
            Llegan a Belén José y María, buscando hospedaje en los mesones; pero no lo encuentran ya por hallarse todo ocupado, ya porque se les desechase a causa de su pobreza.
          </p>
          <p>
            Sin embargo, puede turbar la paz interior de los que están fijos en Dios.
          </p>
          <p>
            Si José experimentaba sorpresa cuando era rechazado de casa en casa, porque pensaba en María y en el Niño, sonreíase también con tanta tranquilidad cuando fijaba sus miradas en su casta esposa.
          </p>
          <p>
            El niño aún no nacido regocijábase de aquellas negativas que eran el preludio de sus humillaciones venideras.
          </p>
          <p>
            Cada voz áspera, el nido de cada puerta que se cerraba ante ellos, era lo que había venido a buscar.
          </p>
          <p>
            El deseo de esas humillaciones era lo que había contribuido a hacerle tomar la forma humana.
          </p>
          <p>
            ¡Oh divino niño de Belén! Estos días que tantos han pasado en fiestas y diversiones o descansando muellemente en cómodas y ricas mansiones, han sido para vuestros padres un día de fatiga y vejaciones de toda clase.
          </p>
          <p>
            ¡Ay! El espíritu de Belén es el de un mundo que ha olvidado a Dios,. ¡Cuántas veces no ha sido también el nuestro¡ ¿No cerramos continuamente con ruda ignorancia la puerta a los llamamientos de Dios, que nos solicita convertirnos, o santificarnos o conformarnos con su voluntad? ¿No hacemos mal uso de nuestras penas, desconociendo su carácter celestial con que cada uno a su modo lo lleva grabado en si? Dios viene a nosotros muchas veces en la vida, pero no conocemos su faz, o le reconocemos hasta que nos vuelve la espalda y se aleja después de nuestra negativa.
          </p>
          <p>
            Se pone el sol de 24 de diciembre detrás de los tejados de Belén y sus últimos rayos doran las cimas de las rocas escarpadas que lo rodean.
          </p>
          <p>
            Hombres groseros codean rudamente al Señor en las calles de aquella aldea oriental, y cierran sus puertas al ver a su madre, La bóveda de los cielos aparece purpurina por encima de aquellas colinas frecuentadas por los pastores.
          </p>
          <p>
            Las estrellas van apareciendo una tras otra.
          </p>
          <p>
            Algunas horas más y aparecerá el Verbo eterno.
          </p>
        </div>
      </div>
    </>
  )
};

export default DayEigth;