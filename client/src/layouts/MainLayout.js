import React from 'react'
import Header from '../components/Header'
import { Categories } from '../components/Categories'
import { Outlet, useLocation } from 'react-router-dom'
import { setCategoryId } from '../redux/filter/slice'
import { selectFilter } from '../redux/filter/selectors'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'

const MainLayout = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)
  const location = useLocation()

  const onChangeCategory = React.useCallback((idx) => {
    dispatch(setCategoryId(idx))
  }, [dispatch])

  return (
    <>
      <Header />     
      <div className="wrapper">
        <div className="content__top">
          {location.pathname !== '/cart' && (
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          )}
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default MainLayout
