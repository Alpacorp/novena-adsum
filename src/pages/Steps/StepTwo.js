import * as React from 'react';
import { Link } from 'react-router-dom';
import { dayone, daytwo, daythree, dayfour, dayfive, daysix, dayseven, dayeight, daynine, twoPage } from '../../assets';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';
import './Steps.css'

const StepTwo = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={twoPage} textImage='step two' />
        <h2>Elige la lectura para hoy</h2>
        <div className='calendar'>
          <Link to='/dayone'>
            <DayImgDate image={dayone} textImage='day one' />
          </Link>
          <Link to='/daytwo'>
            <DayImgDate image={daytwo} textImage='day two' />
          </Link>
          <Link to='/daythree'>
            <DayImgDate image={daythree} textImage='day three' />
          </Link>
          <Link to='/dayfour'>
            <DayImgDate image={dayfour} textImage='day four' />
          </Link>
          <Link to='/dayfive'>
            <DayImgDate image={dayfive} textImage='day five' />
          </Link>
          <Link to='/daysix'>
            <DayImgDate image={daysix} textImage='day six' />
          </Link>
          <Link to='/dayseven'>
            <DayImgDate image={dayseven} textImage='day seven' />
          </Link>
          <Link to='/dayeight'>
            <DayImgDate image={dayeight} textImage='day eight' />
          </Link>
          <Link to='/daynine'>
            <DayImgDate image={daynine} textImage='day nine' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default StepTwo;