import React from 'react'
import { ProductsBlock } from '../components/ProductsBlock'
import { Skeleton } from '../components/ProductsBlock/Skeleton'
import { useSelector } from 'react-redux'
import { selectFilter } from '../redux/filter/selectors'
import { selectProductData } from '../redux/products/selectors'
import { fetchBallons } from '../redux/products/asyncActions'
import { useAppDispatch } from '../redux/store'
import SimpleSlider from '../components/SimpleSlider'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const Home = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)
  const { items, status } = useSelector(selectProductData)
  const { t } = useTranslation()

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
      if (obj.category == 0) {
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
        <title>{t('descНоmePage.titleHelmet')}</title>
        <meta name="description" content={t('descНоmePage.descHelmet')} />
        <link rel="canonical" href="https://www.sharik-upp.com/" />
      </Helmet>
      <SimpleSlider />
      <div className="content__title">
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
        {t('homeTitle')}{' '}
        <img src="/data/imаges/layered-heart.svg" alt="heart" />
      </div>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>{t('homeErrorTitle')} 😕</h2>
          <p>{t('homeErrorDescription')}</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletons : products}
        </div>
      )}
      <div className="content__description">
        <h1>{t('descНоmePage.title1')}</h1>
        <p>{t('descНоmePage.content1_1')}</p>
        <p>{t('descНоmePage.content1_2')}</p>
        <h2>{t('descНоmePage.title2')}</h2>
        <p>{t('descНоmePage.content2_1')}</p>
        <p>{t('descНоmePage.content2_2')}</p>
        <h3>{t('descНоmePage.title3')}</h3>
        <p>{t('descНоmePage.content3_1')}</p>
        <p>{t('descНоmePage.content3_2')}</p>
        <h4>{t('descНоmePage.title4')}</h4>
        <p>{t('descНоmePage.content4_1')}</p>
        <p>{t('descНоmePage.content4_2')}</p>
      </div>
    </div>
  )
}

export default Home
