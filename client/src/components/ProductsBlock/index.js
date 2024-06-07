import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cart/slice'
import { selectCartItemById } from '../../redux/cart/selectors'
import { Link } from 'react-router-dom'

export const BalloonsBlock = ({ id, title, price, imageUrl, description }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItemById(id))

  const addedCount = cartItem ? cartItem.count : 0

  const onclickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      description,
      count: 0,
    }
    dispatch(addItem(item))
  }
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/balloons/${id}`}>
          <div className="pizza-block__image-container">
            <img
              className="pizza-block__image"
              src={process.env.PUBLIC_URL + imageUrl}
              alt="Balloons"
            />
          </div>

          <h4 className="pizza-block__title">{title[0]}</h4>
        </Link>

        <div className="pizza-block__description">
          <p>{description[0]}</p>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} ₴</div>
          <button
            onClick={onclickAdd}
            className="button button--outline button--add"
          >
            <span>Купить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  )
}
