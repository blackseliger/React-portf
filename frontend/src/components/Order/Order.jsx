import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { orderAgrement, orderDefault, orderInputAddress, orderInputPhone, orderSubmitRequest } from '../../reduxObservable/order/actionCreators';
import { cartRemoveAll } from '../../reduxObservable/cart/actionCreators';
import Loader from '../Loader/Loader';


function Order(props) {

    const cart = useSelector((state) => state.cart);

    const { loading, success, error, phone, address, agreement } = useSelector((state) => state.order);

    const dispatch = useDispatch();

    const handleChangePhone = (evt) => dispatch(orderInputPhone(evt.target.value));
    const handleChangeAddress = (evt) => dispatch(orderInputAddress(evt.target.value));
    const handleChangeAgreement = (evt) => dispatch(orderAgrement(evt.target.checked));


    const handleSumbit = (evt) => {
        evt.preventDefault();
        console.log(cart)
        dispatch(orderSubmitRequest({
            owner: {
                phone,
                address,
            },
            items: cart.map((el) => ({
                id: el.item.id,
                price: el.item.price,
                count: el.quantity,
            })),
        }));
    };

    useEffect(() => {
        if (success) {
            dispatch(cartRemoveAll())
            dispatch(orderDefault())
        }
    }, [success]);


    return (
        <>
        {loading && <Loader />}
        {(!loading && !error && success) && 
            <h3  className="text-center">Заказ оформлен!</h3>
        }
        {(!loading && !error && !success && cart.length > 0) &&
            <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                <form className="card-body" onSubmit={handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input className="form-control" id="phone" type='tel'  required value={phone}  required onChange={handleChangePhone} placeholder="Ваш телефон"/>
                    </div>
                    <div classNameName="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input className="form-control" id="address" value={address} required  onChange={handleChangeAddress} placeholder="Адрес доставки"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" required onChange={handleChangeAgreement} id="agreement"/>
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" disabled={!agreement} className="btn btn-outline-secondary">Оформить</button>
                </form>
    
            </div>
        </section>
        }
        {error && <h3 className="text-center">{`Ошибка: ${error.message}`}</h3>}
    </>
    )
}

Order.propTypes = {

}

export default Order

