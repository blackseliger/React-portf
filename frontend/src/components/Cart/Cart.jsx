import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

function Cart(props) {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <section className="cart">
          <h2 className="text-center">Корзина</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((o, index) => (
                <tr key={o.item.key}>
                  <th scope="row">{index + 1}</th>
                  <td><a href={`/products/${o.item.id}`}>{o.item.title}</a></td>
                  <td>{o.item.size}</td>
                  <td>{o.quantity}</td>
                  <td>{`${o.item.price} руб.`}</td>
                  <td>{`${o.item.price * o.quantity} руб.`}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-right">Общая стоимость</td>
                <td>{`${cart.length ? cart.reduce((acc, cur) => (acc + cur.item.price * cur.quantity), 0) : 0} руб.`}</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    }

Cart.propTypes = {

}

export default Cart
