import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import CardList from '../CardList/CardList';
import { fetchTopSalesRequest } from '../../reduxObservable/topsales/actionCreators';
import Loader from '../Loader/Loader';



function TopSales(props) {
    const { items, loading, error } = useSelector((state) => state.topSales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopSalesRequest());
        console.log(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <>
        {!error && (
            <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            { loading ? <Loader/> : <CardList items={items}></CardList>}
        </section>
        )}
        </>
    )
}

TopSales.propTypes = {

}

export default TopSales

