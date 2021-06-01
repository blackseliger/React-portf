import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalogRequest } from '../../reduxObservable/catalog/actionCreators';
import CardList from '../CardList/CardList';



function Catalog(props) {
    const { items, loading, error } = useSelector((state) => state.catalog);
    const dispatch = useDispatch();

    const catalogStyle = 'card catalog-item-card'

// стили для каталога, без них ломается список
    useEffect(() => {
        dispatch(fetchCatalogRequest());
    }, [dispatch]);

    return (
        <>
        {!error && (
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                 <CardList items={items} catalogStyle={catalogStyle}></CardList>
            </section>
        )}
        </> 
    )
}

Catalog.propTypes = {

}

export default Catalog

