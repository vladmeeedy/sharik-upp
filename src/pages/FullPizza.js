import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const FullPizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = React.useState()
  const navigate = useNavigate()
  React.useEffect(() => {
    async function fetshPizza() {
      try {
        const { data } = await axios.get("/data/productsData.json")       
        const [result] = data.filter((obj) => obj.id === id)
        setPizza(result)
      } catch (error) {
        alert('Помилка при отриманні товару')
        navigate('/')
      }
    }
    fetshPizza()
  }, [])

  // console.log("balloons", data)
  // console.log("idballoons", id);

  if (!pizza) {
    return 'loading...'
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  )
}

export default FullPizza
