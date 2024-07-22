import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../redux/cart/slice'
import { selectCart } from '../redux/cart/selectors'
import { CartItem } from '../components/CartItem'
import { CartEmpty } from '../components/CartEmpty'
import OrderForm from '../components/OrderForm'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cart = () => {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector(selectCart)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems())
    }
  }

  const handleSubmit = async (values) => {
    const orderDetails = {
      buyerInfo: values,
      cartItems: items,
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/sendOrder',
        orderDetails,
      )
      console.log(response.data)
      navigate('/zakaz-prinyat')
      dispatch(clearItems())
      alert('Заказ успешно отправлен')
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error)
      alert('Ошибка при отправке заказа')
    }
    console.log(orderDetails)
  }

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className="container--cart">
      <div>
        <OrderForm onSubmit={handleSubmit} />
      </div>

      <div className="cart">
        <div className="cart__top">
          <div className="cart-img">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.78002 5H16.3334L15.0134 10.59C14.9095 11.0348 14.6662 11.4312 14.3238 11.7155C13.9814 11.9998 13.5585 12.1533 13.1201 12.1533H6.65335C6.21495 12.1533 5.79206 11.9998 5.44963 11.7155C5.1072 11.4312 4.86393 11.0348 4.76002 10.59L3.66669 5.5M1.66669 1.66667H4.33335L5.39335 6.72667C5.45319 7.00852 5.61198 7.25837 5.84236 7.43443C6.07274 7.6105 6.36002 7.70003 6.65335 7.68H13.1201"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <h3>{t('cartTitle')}</h3>
          </div>
          <div onClick={onClickClear} className="cart__clear">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46739 7.15482 2.15482C7.46739 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46739 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96739 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5H15.8333Z"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.33333 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.6667 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>{t('cartClearItem')}</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {t('cartTotalCount')}: <b>{totalCount} шт.</b>
            </span>
            <span>
              {t('cartTotalPrice')}: <b>{totalPrice} грн</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <NavLink to="/" className="go-back-btn">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>{t('cartGoBackButton')}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
