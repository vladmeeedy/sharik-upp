import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cart/slice'
import { selectCartItemById } from '../../redux/cart/selectors'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import LazyLoad from 'react-lazyload'

export const ProductsBlock = ({
  id,
  title,
  price,
  imageUrl,
  description,
  category,
}) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItemById(id))
  const { t, i18n } = useTranslation()

  const allCategory = [
    'nabory',
    'gelievye-shary',
    'folgirovannye-figury',
    'folgirovannye-zvezdy',
    'folgirovannye-cifry',
    'korobka-syurpriz',
    'svechi-na-tort',
  ]

  const categoryName = allCategory[category]
  console.log(categoryName)

  const addedCount = cartItem ? cartItem.count : 0

  const onclickAdd = () => {
    const item = {
      id,
      title: title[i18n.language],
      price,
      imageUrl,
      description: description[i18n.language],
      count: 0,
      category,
    }
    dispatch(addItem(item))
    console.log(category)
  }
  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <Link key={id} to={`/${categoryName}/${id}`}>
          <div className="product-block__image-container">
            <LazyLoad height={200} offset={100}>
              <img
                className="product-block__image"
                src={process.env.PUBLIC_URL + imageUrl}
                title={title[i18n.language]}
                alt={title[i18n.language]}
                width="300"
                height="300"
                loading="lazy"
              />
            </LazyLoad>
          </div>

          <div className="product-block__title">{title[i18n.language]}</div>
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
