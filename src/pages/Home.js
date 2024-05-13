import React from 'react'
import { Categories } from '../components/Categories'
import { BalloonsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'

import { selectFilter } from '../redux/filter/selectors'
import { selectPizzaData } from '../redux/balloons/selectors'
import { fetchBallons } from '../redux/balloons/asyncActions'
import { useAppDispatch } from '../redux/store'
import SimpleSlider from '../components/SimpleSlider'

const Home = () => {
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
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchBallons({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      }),
    )
    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    getPizzas()
  }, [categoryId, sort.sortProperty, currentPage])

  const pizzas = items
    .filter((obj) => {
      if (obj.title[0].toLowerCase().includes(searchValue.toLowerCase())) {
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
      {/* <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      </div> */}
      <SimpleSlider />
      <h4 className="content__title"><img src="/data/imаges/layered-heart.svg" alt='heart'/>Популярные композиции <img src="/data/imаges/layered-heart.svg" alt='heart'/></h4>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль, не вдалося отримати піци. Повторіть спробу пізніше.</p>
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

export default Home
