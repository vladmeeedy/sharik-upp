
import React from 'react'
import { Header} from '../components/Header'
import { Categories } from '../components/Categories'
import { Outlet } from 'react-router-dom'
import { setCategoryId } from '../redux/filter/slice'
import { selectFilter } from '../redux/filter/selectors'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'


const MainLayout = () => {

  const dispatch = useAppDispatch()
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter)

  const onChangeCategory = React.useCallback((idx) => {
    dispatch(setCategoryId(idx))
  }, [])
  
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className="content__top">
        <Categories valiue = {categoryId} onChangeCategory={onChangeCategory}/>
      </div>  
      </div>
         
      <div className="wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default MainLayout
