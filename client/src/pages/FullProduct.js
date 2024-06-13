import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FullProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = React.useState()
  const navigate = useNavigate()

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
          <img src={product.imageUrl} alt="product" />
        </div>
        <div className="title-container">
          <div className="product-info">
            <span>Название:</span>
             <p>{product.title[0]}</p>
          </div>
          <div className="product-info">
            <span>Описание:</span>
             <p>{product.description[0]}</p>
          </div>
          <div className="product-info">
            <span>Цена:</span> <p>{product.price} ₴</p>
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
