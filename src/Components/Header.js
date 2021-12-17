import * as React from 'react';
import PropTypes from 'prop-types';
import Back from './Back';
import './Components.css';
import backButton from '../assets/components/botonvolver.svg';

const Header = ({ show }) => {
  const showBack = show;
  return (
    <div className='header'>
      {
        showBack ? <Back url='/' src={backButton} /> : ''
      }
    </div>
  )
};

Header.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Header;