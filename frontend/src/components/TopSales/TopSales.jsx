import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
import CardList from '../CardList/CardList';
import { fetchTopSalesRequest } from '../../reduxObservable/topsales/actionCreators';



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
            <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            { loading ? <div className="preloader">
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

