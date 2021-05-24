import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
import { fetchTopSalesRequest } from './actions/actionCreators';
import CardList from '../CardList/CardList';


function TopSales(props) {
    const { items, loading, error } = useSelector((state) => state.topSales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopSalesRequest());
        console.log(items);
    }, [dispatch]);

    return (
        <>
        {!error && (
            <section class="top-sales">
            <h2 class="text-center">Хиты продаж!</h2>
            { loading ? <div class="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> : <CardList items={items}></CardList>}
        </section>
        )}
        </>
    )
}

TopSales.propTypes = {

}

export default TopSales

