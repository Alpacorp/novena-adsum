import * as React from 'react';
import { dayfive } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';

const DayFive = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={dayfive} textImage='day five' />
        <h2>Día Quinto</h2>
        <Slide />
        <div className="stepText">
          <p>
            Ya hemos visto la vida que llevaba el Niño Jesús en el seno de su purísima Madre; veamos hoy toda la vida que llevaba también María durante el mismo espacio de tiempo.
          </p>
          <p>
            Necesidad hoy de que no tengamos en ella si queremos comprender, en cuanto es posible a nuestra limitada capacidad, los sublimes misterios de la encarnación y el modo como hemos de corresponder a ellos.
          </p>
          <p>
            María no cesaba de aspirar por el momento en que gozaría de esa visión beatifica terrestre; la faz de Dios encarnado.
          </p>
          <p>
            Estaba a punto de ver aquella faz humana que debía iluminar el cielo durante toda la eternidad, Iba a leer el amor filial en aquellos mismos ojos cuyos rayos deberían esparcir para siempre la felicidad en millones de elegidos.
          </p>
          <p>
            Iba a ver aquel rostro todos los días, a todas horas, cada instante, durante muchos años. Iba a verle en la ignorancia aparente de la infancia, en los encantos particulares de la juventud y en la serenidad reflexiva de la edad madura.
          </p>
          <p>
            Haría todo lo que quisiese de aquella faz divina; podría estrecharla contra la suya con toda la libertad del amor materno; cubrir de besos los labios que deberían pronunciar la sentencia a todos los hombres; contemplarla a su gusto durante su sueño o despierta, hasta que la hubiese aprendido de memoria...¡cuán ardientemente deseaba ese día!.
          </p>
          <p>
            Tal era la expectativa de María... era inaudita en sí misma, mas no por eso dejaba de ser el tipo magnífico de toda la vida cristiana.
          </p>
          <p>
            No nos contentemos con admirar a Jesús residiendo en María, sino por esencia, potencia y presencia.
          </p>
          <p>
            Sí, Jesús nace continuamente en nosotros y de nosotros, por las buenas obras que nos hace capaces de cumplir y por nuestra cooperación a la gracia; de manera que el alma del que se halla en gracia es un seno perpetuo de María, un Belén interior sin fin.
          </p>
          <p>
            Después de la comunión Jesús habita en nosotros, durante algunos instantes, real y sustancialmente como Dios y como hombre, porque el mismo Niño que estaba en María está también en el Santísimo Sacramento.
          </p>
          <p>
            ¿Qué es todo esto sino una participación de la vida de María durante esos maravillosos meses, y una expectativa llena de delicias como la suya.
          </p>
        </div>
      </div>
    </>
  )
};

export default DayFive;