import './scss/app.scss'
import Home from './pages/Home'
import LatexBalloons from './pages/LatexBalloons'
import FiguresBalloons from './pages/FiguresBalloons'
import StarsBalloons from './pages/StarsBalloons'
import NumbersBalloons from './pages/NumbersBalloons'
import SurpriseBox from './pages/SurpriseBox'
import CandlesCake from './pages/CandlesCake'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import React from 'react'
import Guarantee from './pages/Guarantee'
import ContractOfer from './pages/ContractOfer'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/ContactUs'

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart"*/ './pages/Cart'),
)
const FullProduct = React.lazy(
  () => import(/*webpackChunkName: "FullProduct"*/ './pages/FullProduct'),
)
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound"*/ './pages/NotFound'),
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="gelievye-shary" element={<LatexBalloons />} />
        <Route path="folgirovannye-figury" element={<FiguresBalloons />} />
        <Route path="folgirovannye-zvezdy" element={<StarsBalloons />} />
        <Route path="folgirovannye-cifry" element={<NumbersBalloons />} />
        <Route path="korobka-syurpriz" element={<SurpriseBox />} />
        <Route path="svechi-na-tort" element={<CandlesCake />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="balloons/:id"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <FullProduct />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
        <Route path="o-nas" element={<AboutUs />} />
        <Route path="garantiya-i-vozvrat" element={<Guarantee />} />
        <Route path="dogovor-oferty" element={<ContractOfer />} />
        <Route path="contact-us" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
