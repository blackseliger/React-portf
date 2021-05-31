import React, { useState } from 'react';
import PropTypes from 'prop-types';



function Image({title, images }) {

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
                <img src={images[actualIndex]} 
                    alt={title} 
                    // className="card-img-top img-fluid "
                    onMouseEnter={handleMouseNext}
                    onMouseLeave={handleMousePrev}
              />
          )}  
        </>
    )
}

Image.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Image

