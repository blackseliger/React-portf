import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItemProductRequest, itemProductQuantity, itemProductSelected } from '../../reduxObservable/itemproduct/actionCreators';
import Loader from '../Loader/Loader';
import Sizes from '../Sizes/Sizes';
import Quantity from '../Quantity/Quantity';
import { cartAdd } from '../../reduxObservable/cart/actionCreators';
import { useHistory } from 'react-router';

function ItemProduct({productID}) {
    const { items, loading, error, selected, quantity } = useSelector((state) => state.itemProduct);
    console.log(productID);
    console.log(items);

    const history = useHistory();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItemProductRequest(productID));
        // console.log(items);
        return () => {};
    }, [dispatch, productID]);

    const handleSize = (actualSizeIndx) => itemProductSelected(actualSizeIndx);

    const handleIncrease = () => dispatch(itemProductQuantity(quantity === 10 ? 10 : quantity + 1));
    const handleReduce = () => dispatch(itemProductQuantity(quantity === 1 ? 1 : quantity - 1));

    const handleAddItem = () => {
        dispatch(cartAdd({
            item: {...items, size: items.sizes[selected].size},
            quantity,
        }))
        history.push('/cart')
        console.log(items.sizes[selected].size);
    }

    const available = items !== null  && items.sizes.filter((av) => av.avalible);
    

    const product_params = items !== null && [
    {
        key: items.sku,
        name: 'Артикул'
    },
    {
        key: items.manufacturer,
        name: 'Производитель',
    },
    {
        key:  items.color,
        name: 'Цвет',
    },
    {
        key: items.material,
        name: 'Материал',
    },
    {
        key:  items.season,
        name: 'Сезон',
    },
    {
        key: items.reason,
        name: 'Повод',
    }
]


    return (
        
        <section classNameName="catalog-item">
                {(loading || error ) && <Loader/>}
                {/* добавить заглушку если ошибка, типа " Ой что то сломалось, обновите" */}
                {(!loading && !error && items) &&
                <>
                        <h2 className="text-center">{items.title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={items.images[0] || ''}
                                    className="img-fluid" alt={items.title}/>
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                    {product_params.map((o) => (
                                        <tr key={o.name}>
                                            <td>{o.name}</td>
                                            <td>{o.key}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    {(available.length === 0) ? <p>Нет в наличии</p> : 
                                        <>
                                        <Sizes data={available} onClick={handleSize} selected={selected}/>
                                        <Quantity amount={quantity} handleIncrease={handleIncrease} handleReduce={handleReduce}/>
                                        </>
                                    }
                                </div>
                                {(available.length > 0) && <button  onClick={handleAddItem} className="btn btn-danger btn-block btn-lg">В корзину</button>}
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

