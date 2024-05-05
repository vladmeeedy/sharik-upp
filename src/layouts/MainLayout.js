import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
