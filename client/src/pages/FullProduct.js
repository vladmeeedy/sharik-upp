import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const FullProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = React.useState()
  const navigate = useNavigate()
  React.useEffect(() => {
    async function fetshProduct() {
      try {
        const { data } = await axios.get("/data/productsData.json")       
        const [result] = data.filter((obj) => obj.id === id)
        setProduct(result)
      } catch (error) {
        alert('Помилка при отриманні товару')
        navigate('/')
      }
    }
    fetshProduct()
  }, [])



  if (!product) {
    return 'loading...'
  }
  return (
    <div className="container">
      <img src={product.imageUrl} alt="product" />
      <h2>{product.title[0]}</h2>
      <h4>{product.price}</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  )
}

export default FullProduct
