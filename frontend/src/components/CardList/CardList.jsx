import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

function CardList({items, catalogStyle}) {
    console.log(items);
    console.log(catalogStyle)
    return (
        <div className="row">
        {items.map((o) => (
          <div className="col-4" key={o.id}>
            <Card  item={o} cataLogStyle={catalogStyle} />
          </div>
        ))}
      </div>
    )
}

CardList.defaultProps = {
  cataLogStyle: 'card',
}

CardList.propTypes = {

}


export default CardList

