import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/cart/slice'
import { selectCartItemById } from '../redux/cart/selectors'

const FullProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = React.useState(null)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const cartItem = useSelector(selectCartItemById(id))
  const addedCount = cartItem ? cartItem.count : 0

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('/data/productsData.json')
        const [result] = data.filter((obj) => obj.id === id)
        setProduct(result)
      } catch (error) {
        alert('Помилка при отриманні товару')
        navigate('/')
      }
    }
    fetchProduct()
  }, [id, navigate])

  if (!product) {
    return 'loading...'
  }

  const onClickAdd = () => {
    const item = {
      id,
      title: product.title[i18n.language],
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description[i18n.language],
      count: 0,
      category: product.category,
    }
    dispatch(addItem(item))
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product.title[i18n.language]}</title>
        <meta name="description" content={product.description[i18n.language]} />
        <link rel="canonical" href="https://www.sharik-upp.com/" />
      </Helmet>

      <div className="container-product">
        <div className="image-container">
          <img src={product.imageUrl} alt={product.title[i18n.language]} />
        </div>
        <div className="title-container">
          <div className="product-info">
            <span>{t('productTitle')}:</span>
            <p>{product.title[i18n.language]}</p>
          </div>
          <div className="product-info">
            <span>{t('productDescription')}:</span>
            <p>{product.description[i18n.language]}</p>
          </div>
          <div className="product-info">
            <span>{t('productPrice')}:</span> <p>{product.price} ₴</p>
          </div>
        </div>

        {/* Кнопка "Добавить в корзину" */}
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <span>{t('productsBlockButton')}</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>

        <button
          className="button button--outline button--add"
          onClick={handleBackClick}
        >
          <span>Назад</span>
        </button>
      </div>
    </div>
  )
}

export default FullProduct
