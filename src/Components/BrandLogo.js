import * as React from 'react';
import PropTypes from 'prop-types';

const BrandLogo = ({ src }) => {
  return (
    <>
      <div className='brandLogo'>
        <img src={src} alt="logo empresa" />
      </div>
    </>
  )
};

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired
}

export default BrandLogo;