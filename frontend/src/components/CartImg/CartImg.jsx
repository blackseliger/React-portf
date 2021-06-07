import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartImg(props) {

    const cart = useSelector((state) => state.cart);


    return (
        <Link to="/cart">
        <div className="header-controls-pic header-controls-cart">
          {(cart.length > 0) && <div className="header-controls-cart-full">{cart.length}</div>}
          <div className="header-controls-cart-menu" />
        </div>
      </Link>
    )
}

CartImg.propTypes = {

}

export default CartImg

