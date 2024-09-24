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

const LatexBalloons = () => {
  const { t } = useTranslation()
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
      if (obj.category == 1) {
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
        <title>{t('categoryLatexBalloons')} </title>
        <meta
          name="description"
          content="воздушные шары, шарики киев, шарики с гелием, купить шаріки"
        />
        <link
          rel="canonical"
          href="https://www.sharik-upp.com/gelievye-shary"
        />
      </Helmet>
      <div className="content__title">
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
        {t('categoryLatexBalloons')}{' '}
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
    </div>
  )
}

export default LatexBalloons
