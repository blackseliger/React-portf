import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image';


function Card({item}) {
    const {category, title, price, images, id} = item;
    return (
        <div className="card">
            <Image title={title} images={images}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div> 
        </div>
    )
}


Card.propTypes = {
    item: PropTypes.shape({
      category: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };
  


export default Card

