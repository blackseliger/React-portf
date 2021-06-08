import React, { useState } from 'react';
import PropTypes from 'prop-types';



const divStyle = {
    width: '100%',
    height: '0',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: '160%',
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
              <div style={divStyle}>
                    <img src={images[actualIndex]} 
                    alt={title} 
                    style={imgStyle}
                    className="card-img-top img-fluid" 
                    // не работает?........
                    onMouseEnter={handleMouseNext}
                    onMouseLeave={handleMousePrev}
                    onError={(e) => {e.target.oneerror = null; e.target.src='/img/placeholder.png' }}
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

Image.defaultProps = {
  images: ['/img/placeholder.png', '/img/placeholder.png']
}

export default Image

