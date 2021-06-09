import React from 'react'
import PropTypes from 'prop-types'

function Quantity({amount, handleIncrease, handleReduce}) {
    return (
        <p>
          Количество: 
          <span className="btn-group btn-group-sm pl-2">
            <button type='button' className="btn btn-secondary" onClick={handleReduce}>-</button>
            <span className="btn btn-outline-primary">{amount}</span>
            <button type='button' className='btn btn-secondary' onClick={handleIncrease}>+</button>  
            </span>  
        </p>
    )
}

Quantity.propTypes = {
    amount: PropTypes.number.isRequired,
    handleIncrease: PropTypes.func.isRequired,
    handleReduce: PropTypes.func.isRequired,
}

export default Quantity

