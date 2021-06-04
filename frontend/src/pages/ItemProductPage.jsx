import React from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch } from 'react-router'
import ItemProduct from '../components/ItemProduct/ItemProduct';

function ItemProductPage(props) {
    const match = useRouteMatch();
    return (
        <ItemProduct productID={match.params.id}></ItemProduct>
    )
}


export default ItemProductPage

