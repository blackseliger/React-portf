import React from 'react'
import PropTypes from 'prop-types'

function Card({item}) {
    const {category, title, price, images, id} = item;
    return (
        <div className="card">
            <img src={images[0]} className="card-img-top img-fluid" alt={title}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div> 
        </div>
    )
}

Card.propTypes = {

}

export default Card

