import React from 'react'
import { ProductsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { useSelector } from 'react-redux'

import { selectFilter } from '../redux/filter/selectors'
import { selectProductData } from '../redux/products/selectors'
import { fetchBallons } from '../redux/products/asyncActions'
import { useAppDispatch } from '../redux/store'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const CandlesCake = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)
  const { items, status } = useSelector(selectProductData)

  const onChangePage = (value) => {
    dispatch(setCurrentPage(value))
  }

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
      if (obj.category == 6) {
        return true
      }
      return false
    })
    .map((obj) => <ProductsBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('categoryCandlesCake')}
          {''}{' '}
        </title>
        <meta
          name="description"
          content="шарики надувные, заказ шары, шары с надписью, шарики купить киев"
        />
        <link
          rel="canonical"
          href="https://www.sharik-upp.com/svechi-na-tort"
        />
      </Helmet>
      <div className="content__title">
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
        {t('categoryCandlesCake')}{' '}
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
      </div>
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

      <div className="container__pagination"></div>
    </div>
  )
}

export default CandlesCake
