import * as React from 'react';
import { dayone } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import Slide from '../../Components/Slide';
import './Days.css';

const DayOne = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={dayone} textImage='day one' />
        <h2>Día Primero</h2>
        <Slide />
        <div className="stepText">
          <p>
            En el principio de los tiempos el Verbo reposaba en el seno de su Padre en lo más alto de los cielos; allí era la causa, a la par que el modelo de toda la creación.
          </p>
          <p>
            En esas profundidades de una incalculable eternidad permanecía el Niño de Belén antes de que se dignara bajar a la Tierra y tomara visiblemente posesión de la gruta de Belén.
          </p>
          <p>
            Allí es donde debemos buscar sus principios que jamás han comenzando; de allí debemos datar la genealogía de lo eterno, que no tiene antepasados y contemplar la vida de complacencia infinita que allí llevaba.
          </p>
          <p>
            La vida del Verbo eterno en el seno de su Padre era una vida maravillosa y sin embargo, ¡misterio sublime!, busca otra morada, una mansión creada.
          </p>
          <p>
            No era porque en su mansión eterna faltase algo a su infinita felicidad, sino porque su misericordia infinita anhelaba la redención y la salvación del género humano, que sin Él no podría verificarse.
          </p>
          <p>
            El pecado de Adán había ofendido a Dios y esa ofensa infinita no podía ser condonada sino por los méritos del mismo Dios.
          </p>
          <p>
            La raza de Adán había desobedecido y merecido un castigo eterno; era pues necesario para salvarla y satisfacer su culpa, que Dios, sin dejar el cielo, tomase la forma del hombre sobre la Tierra y con la obediencia a los designios de su Padre expiase aquella desobediencia, ingratitud y rebeldía.
          </p>
          <p>
            Era necesario, en las miras de su amor, que tomase la forma, las debilidades e ignorancias sistemáticas del hombre; que creciese para darle crecimiento espiritual; que sufriese, para enseñarle a morir a sus pasiones y a su orgullo.
          </p>
          <p>
            Y por eso el Verbo eterno, ardiendo en deseos de salvar al hombre, resolvió hacerse hombre también y así redimir al culpable.
          </p>
        </div>
      </div>
    </>
  )
};

export default DayOne;