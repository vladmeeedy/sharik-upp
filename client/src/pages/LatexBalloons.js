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
        <title>{t('descLatexballoons.titleHelmet')} </title>
        <meta name="description" content={t('descLatexballoons.descHelmet')} />
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
      <div className="content__description">
        <h1>{t('descLatexballoons.title1')}</h1>
        <p>{t('descLatexballoons.content1_1')}</p>
        <p>{t('descLatexballoons.content1_2')}</p>
        <h2>{t('descLatexballoons.title2')}</h2>
        <p>{t('descLatexballoons.content2_1')}</p>
        <p>{t('descLatexballoons.content2_2')}</p>
        <h3>{t('descLatexballoons.title3')}</h3>
        <p>{t('descLatexballoons.content3_1')}</p>
        <p>{t('descLatexballoons.content3_2')}</p>
        <h4>{t('descLatexballoons.title4')}</h4>
        <p>{t('descLatexballoons.content4_1')}</p>
        <p>{t('descLatexballoons.content4_2')}</p>
      </div>
    </div>
  )
}

export default LatexBalloons
