import React, { useState } from 'react';
import PropTypes from 'prop-types';


const wrapperStyle = {
    width: '100%',
    height: '0',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: '170%', // ratio
  };
  
  const imgStyle = {
    position: 'absolute',
    left: '-50%',
    top: '-50%',
    right: '-50%',
    bottom: '-50%',
    heigth: 'auto',
    width: '100%',
    margin: 'auto',
  };

function Image({ title, images }) {

    const [actualIndex, setActualIndex] = useState(0);

    const handleMouseNext = () => {
        if (actualIndex === 0 ) {
            setActualIndex(1);
        }
    }

    const handleMousePrev = () => {
        if (actualIndex === 1) {
            setActualIndex(0);
        }
    } 

    return (
        <>
          {images.length && (
              <div style={wrapperStyle}>
                    <img src={images[actualIndex]} 
                    alt={title} 
                    style={imgStyle}
                    className="card-img-top img-fluid" 
                    // не работает?........
                    onMouseEnter={handleMouseNext}
                    onMouseLeave={handleMousePrev}
              />
            </div>
          )}  
        </>
    )
}

Image.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Image

