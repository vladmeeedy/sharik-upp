import React from 'react'
import { Header } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
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
