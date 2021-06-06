import React from 'react'
import PropTypes from 'prop-types'

function Sizes({data, onClick, selected}) {
    console.log(data);
    
    return (
        <p>
          {(data.length > 0) && 'Размеры в наличии: '}
          {(data.length > 0) && data.map((el, index) => (
              <span 
                    className={`catalog-item-size ${(index === selected) ? 'selected' : ''}`} 
                    key={el.size}
                    onClick={() => onClick(index)}
                    >
                        {el.size}
                    </span>
          ))}  
        </p>
    )
}

Sizes.propTypes = {

}

export default Sizes

