import * as React from 'react';
import PropTypes from 'prop-types';

const DayImgDate = (image) => {
  return (
    <>
      <div className='dayImg'>
        <img src={image.image} alt={image.textImage} />
      </div>
    </>
  )
};

DayImgDate.propTypes = {
  image: PropTypes.string.isRequired,
  textImage: PropTypes.string.isRequired
}

export default DayImgDate;