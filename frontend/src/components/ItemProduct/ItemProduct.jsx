import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItemProductRequest } from '../../reduxObservable/itemproduct/actionCreators';
import Loader from '../Loader/Loader';

function ItemProduct({productID}) {
    const { items , loading, error } = useSelector((state) => state.itemProduct);
    console.log(productID);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItemProductRequest(productID));
        console.log(items);
    }, [dispatch]);




    return (
        
        <section classNameName="catalog-item">
                {(loading || error ) && <Loader/>}
                {/* добавить заглушку если ошибка, типа " Ой что то сломалось, обновите" */}
                {(!loading && !error) &&
                <>
                        <h2 className="text-center">{items.title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={items.images[0]}
                                    className="img-fluid" alt={items.title}/>
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>1000046</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>PAUL ANDREW</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>Чёрный</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>Кожа</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>Лето</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>Прогулка</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Размеры в наличии: <span className="catalog-item-size selected">18 US</span> <span className="catalog-item-size">20 US</span></p>
                                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                            <button className="btn btn-secondary">-</button>
                                            <span className="btn btn-outline-primary">1</span>
                                            <button className="btn btn-secondary">+</button>
                                        </span>
                                    </p>
                                </div>
                                <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                            </div>
                        </div>
                </>
                }
        </section>
                
    )
}

ItemProduct.propTypes = {

}

export default ItemProduct

