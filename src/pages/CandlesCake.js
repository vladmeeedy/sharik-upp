import React from 'react'
import { BalloonsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'

import { selectFilter } from '../redux/filter/selectors'
import { selectPizzaData } from '../redux/products/selectors'
import { fetchBallons } from '../redux/products/asyncActions'
import { useAppDispatch } from '../redux/store'

const CandlesCake = () => {
  const dispatch = useAppDispatch()
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter)
  const { items, status } = useSelector(selectPizzaData)

  const onChangeCategory = React.useCallback((idx) => {
    dispatch(setCategoryId(idx))
  }, [])

  const onChangePage = (value) => {
    dispatch(setCurrentPage(value))
  }

  const getPizzas = () => {
    const category = categoryId

    dispatch(
      fetchBallons({
        category,
        currentPage: String(currentPage),
      }),
    )
    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    getPizzas()
  }, [categoryId, currentPage])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    getPizzas()
  }, [categoryId, currentPage])

  const pizzas = items
    .filter((obj) => {
      if (obj.category == 6) {
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
        Свечи на торт
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

      <div className="container__pagination">
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}

export default CandlesCake
