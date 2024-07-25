import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const FullProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = React.useState()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

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

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="container">
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
            <span>{t('productTitle')}:</span> <p>{product.price} ₴</p>
          </div>
        </div>
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
