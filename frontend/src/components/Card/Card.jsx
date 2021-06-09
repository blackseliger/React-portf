import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image';
import { Link } from 'react-router-dom';


function Card({item, cataLogStyle}) {
    const {title, price, images, id} = item;
    console.log(cataLogStyle);
    return (
        <div className={cataLogStyle}>
            {/* catalog-item-card ломает хит продаж но чинит каталог */}
            <Image title={title} images={images}/>
                <div className="card-body">
                    <p className="card-text" style={{minHeight: '3em'}}>{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                </div> 
        </div>
    )
}

Card.defaultProps = {
    cataLogStyle: 'card',
}


Card.propTypes = {
    item: PropTypes.shape({
      category: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    cataLogStyle: PropTypes.string.isRequired,
  };
  


export default Card

