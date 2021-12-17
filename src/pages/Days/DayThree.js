import * as React from 'react';
import { daythree } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const DayThree = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={daythree} textImage='day three' />
        <h2>Día Tercero</h2>
        <Slide />
        <div className="stepText">
          <p>
            Así había comenzado su vida encarnada el Niño Jesús.
          </p>
          <p>
            Consideremos el alma gloriosa y el santo cuerpo que había tomado, adorándolos profundamente.
          </p>
          <p>
            Admirado en el primer lugar en el alma de ese Divino Niño, considerarnos en ella la plenitud de su gracia santificadora; la de su ciencia beatífica, por lo cual desde el primer momento de su vida vio la divina esencia más claramente que todos los ángeles y leyó lo pasado y lo por venir con todos sus arcanos conocimientos.
          </p>
          <p>
            No supo por adquisición nada que no supiese por infusión desde el primer momento de su ser; pero Él adoptó todas las enfermedades de nuestra naturaleza a que dignamente podía someterse, aun cuando no fuese necesario para la grande obra que debía cumplir.
          </p>
          <p>
            Pidámosle que sus divinas facultades suplan la debilidad de las nuestras y les den nueva energía; que su memoria nos enseñe a recordar sus beneficios, su entendimiento a pensar en Él, su voluntad a no hacer sino lo que Él quiere y en servicio suyo.
          </p>
          <p>
            Del alma del Niño Jesús pasemos ahora a su cuerpo, que era un mundo de maravillas, una obra maestra de la mano de Dios.
          </p>
          <p>
            No era como el nuestro, una traba para el alma; era, por el contrario, un nuevo elemento de santidad.
          </p>
          <p>
            Quiso que fuese pequeño y débil como el de los niños, y sujeto a todas las incomodidades de la infancia, para asemejarse más a nosotros y participar de nuestras humillaciones.
          </p>
          <p>
            El Espíritu Santo formó ese cuerpecillo divino con tal delicadeza y tal capacidad de sentir, que pudiese sufrir el exceso para cumplir la grande obra de nuestra redención.
          </p>
          <p>
            La belleza de ese cuerpo divino fue superior a cuanto se ha imaginado jamás; la divina sangre que por sus venas empezó a circular desde el momento de la encarnación es la que lava todas las manchas del mundo culpable.
          </p>
          <p>
            Pidámosle que lave las nuestras en el sacramento de la penitencia, para que el día de su Navidad nos encuentre purificados, perdonados y dispuestos a recibirle con amor y provecho espiritual.
          </p>
        </div>
      </div>
    </>
  )
};

export default DayThree;