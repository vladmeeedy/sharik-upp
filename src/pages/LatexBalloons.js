import React from 'react'
import { BalloonsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { useSelector } from 'react-redux'

import { selectFilter } from '../redux/filter/selectors'
import { selectPizzaData } from '../redux/products/selectors'
import { fetchBallons } from '../redux/products/asyncActions'
import { useAppDispatch } from '../redux/store'

const LatexBalloons = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)
  const { items, status } = useSelector(selectPizzaData)

  const getPizzas = () => {
    const category = categoryId

    dispatch(
      fetchBallons({
        category,
      }),
    )
    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
    getPizzas()
  }, [categoryId])

  const pizzas = items
    .filter((obj) => {
      if (obj.category == 1) {
        return true
      }
      return false
    })
    .map((obj) => <BalloonsBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <h1 className="content__title">
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
        Латексные шарики{' '}
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
      </h1>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Возникла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить товары. Повторите попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletons : pizzas}
        </div>
      )}
    </div>
  )
}

export default LatexBalloons
