import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cart/slice'
import { selectCartItemById } from '../../redux/cart/selectors'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const ProductsBlock = ({ id, title, price, imageUrl, description }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItemById(id))
  const { t, i18n } = useTranslation()

  const addedCount = cartItem ? cartItem.count : 0

  const onclickAdd = () => {
    const item = {
      id,
      title: title[i18n.language],
      price: price[i18n.language],
      imageUrl,
      description: description[i18n.language],
      count: 0,
    }
    dispatch(addItem(item))
  }
  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <Link key={id} to={`/balloons/${id}`}>
          <div className="product-block__image-container">
            <img
              className="product-block__image"
              src={process.env.PUBLIC_URL + imageUrl}
              alt={title[i18n.language]}
            />
          </div>

          <h4 className="product-block__title">{title[i18n.language]}</h4>
        </Link>

        <div className="product-block__description">
          <p>{description[i18n.language]}</p>
        </div>
        <div className="product-block__bottom">
          <div className="product-block__price">{price} ₴</div>
          <button
            onClick={onclickAdd}
            className="button button--outline button--add"
          >
            <span>{t('productsBlockButton')}</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  )
}
