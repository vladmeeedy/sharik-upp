import cartEmptyImg from '../assets/images/empty-cart.png'
import { Link, NavLink } from 'react-router-dom'

export const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Товары отсутствуют <span>😕</span>
      </h2>
      <p>
        Возможно, вы еще не заказали товары.
        <br />
        Для заказа, перейдите на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <NavLink
              to="/"
              className="go-back-btn"
            >
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
              <span>Продолжить покупки</span>
            </NavLink>
    </div>
  )
}
