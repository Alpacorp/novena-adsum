import * as React from 'react';
import { dayseven } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const DaySeven = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={dayseven} textImage='day seven' />
        <h2>Día Septimo</h2>
        <Slide />
        <div className="stepText">
          <p>
            Representémonos el viaje de María y José hacia Belén, llevando consigo, aún no nacido, al Creador del universo hecho hombre.
          </p>
          <p>
            Contemplemos la humanidad y la obediencia de este Divino Niño que aunque de raza judía y habiendo amado durante siglos a su pueblo con una predilección inexplicable, obedece así a un príncipe extranjero que forma el censo de población de su provincia, como si hubiese para Él en esa circunstancia algo que le halagase, y quisiese apresurarse a aprovechar la ocasión de hacerse empadronar oficial y auténticamente como súbdito en el momento en el que venía al mundo.
          </p>
          <p>
            ¿No es extraño que la humillación, que causa tan invencible repugnancia a la criatura, parezca ser la única cosa creada que tenga atractivos para el Creador? ¿No nos enseñará la humildad de Jesús a amar esa hermosa virtud?.
          </p>
          <p>
            ¡Ah...!Que llegue el momento en que aparezca el deseado de las naciones, porque todo clama por este feliz acontecimiento, el mundo, sumido en la oscuridad y el malestar buscando y no encontrando el alivio de sus males, suspira por su Libertador.
          </p>
          <p>
            El anhelo de José, la expectativa de María, son cosa que no puede expresar el lenguaje humano.
          </p>
          <p>
            El Padre Eterno se halla, si es lícito emplear esta expresión adorablemente impaciente por dar a su Hijo único al mundo, y verle ocupar su puesto entre las criaturas visibles.
          </p>
          <p>
            El Espíritu Santo arde en deseos de presentar a la luz del día esta santa humanidad tan bella que Él mismo ha formado con tan especial y divino esmero, en cuanto al Divino Niño, objeto de tantos anhelos, recordemos que hacia nosotros avanza lo mimo que hacia Belén.
          </p>
          <p>
            Apresuremos con nuestro deseo el momento de su llegada; purifiquemos nuestras almas para que sean su mística morada, y nuestros corazones para que sean su Manis terrenal; que nuestros actos de mortificación desprendimiento, preparen los caminos del Señor y hagan rectos sus senderos.
          </p>
        </div>
      </div>
    </>
  )
};

export default DaySeven;