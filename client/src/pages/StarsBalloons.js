import React from 'react'
import { BalloonsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { useSelector } from 'react-redux'

import { selectFilter } from '../redux/filter/selectors'
import { selectProductData } from '../redux/products/selectors'
import { fetchBallons } from '../redux/products/asyncActions'
import { useAppDispatch } from '../redux/store'

const StarsBalloons = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)
  const { items, status } = useSelector(selectProductData)

  const getProducts = () => {
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
    getProducts()
  }, [categoryId])

  const products = items
    .filter((obj) => {
      if (obj.category == 3) {
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
        Фольгированные звезды, сердца{' '}
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
          {status === 'loading' ? skeletons : products}
        </div>
      )}
    </div>
  )
}

export default StarsBalloons
