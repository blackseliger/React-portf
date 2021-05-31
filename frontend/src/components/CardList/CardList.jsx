import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

function CardList({items}) {
    console.log(items);
    return (
        <div className="row">
        {items.map((o) => (
          <div className="col-4 d-flex align-items-stretch" key={o.id}>
            {/* выровнил при варианте разных размеров изображений */}
            <Card item={o} />
          </div>
        ))}
      </div>
    )
}

CardList.propTypes = {

}

export default CardList

