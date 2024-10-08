import './scss/app.scss'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import React, { Suspense, useEffect } from 'react'
import ContactUs from './pages/ContactUs'
import { useTranslation } from 'react-i18next'
import './i18n.js'

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart"*/ './pages/Cart'),
)
const LatexBalloons = React.lazy(
  () => import(/*webpackChunkName: "LatexBalloons"*/ './pages/LatexBalloons'),
)
const FiguresBalloons = React.lazy(
  () =>
    import(/*webpackChunkName: "FiguresBalloons"*/ './pages/FiguresBalloons'),
)
const StarsBalloons = React.lazy(
  () => import(/*webpackChunkName: "StarsBalloons"*/ './pages/StarsBalloons'),
)
const NumbersBalloons = React.lazy(
  () =>
    import(/*webpackChunkName: "NumbersBalloons"*/ './pages/NumbersBalloons'),
)
const SurpriseBox = React.lazy(
  () => import(/*webpackChunkName: "SurpriseBox"*/ './pages/SurpriseBox'),
)
const CandlesCake = React.lazy(
  () => import(/*webpackChunkName: "CandlesCake"*/ './pages/CandlesCake'),
)
const Guarantee = React.lazy(
  () => import(/*webpackChunkName: "Guarantee"*/ './pages/Guarantee'),
)
const ContractOfer = React.lazy(
  () => import(/*webpackChunkName: "ContractOfer"*/ './pages/ContractOfer'),
)
const AboutUs = React.lazy(
  () => import(/*webpackChunkName: "AboutUs"*/ './pages/AboutUs'),
)
const Contacts = React.lazy(
  () => import(/*webpackChunkName: "Contacts"*/ './pages/ContactUs'),
)
const FullProduct = React.lazy(
  () => import(/*webpackChunkName: "FullProduct"*/ './pages/FullProduct'),
)
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound"*/ './pages/NotFound'),
)
const OrderSuccessPage = React.lazy(
  () =>
    import(/*webpackChunkName: "OrderSuccessPage"*/ './pages/OrderSuccessPage'),
)

function App() {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="gelievye-shary"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LatexBalloons />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-figury"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FiguresBalloons />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-zvezdy"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <StarsBalloons />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-cifry"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <NumbersBalloons />
              </React.Suspense>
            }
          />
          <Route
            path="korobka-syurpriz"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SurpriseBox />
              </React.Suspense>
            }
          />
          <Route
            path="svechi-na-tort"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CandlesCake />
              </React.Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </React.Suspense>
            }
          />

          <Route
            path="nabory/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />

          <Route
            path="gelievye-shary/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-figury/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-zvezdy/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />
          <Route
            path="folgirovannye-cifry/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />
          <Route
            path="korobka-syurpriz/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />
          <Route
            path="svechi-na-tort/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <FullProduct />
              </React.Suspense>
            }
          />

          <Route
            path="o-nas"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AboutUs />
              </React.Suspense>
            }
          />
          <Route
            path="garantiya-i-vozvrat"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Guarantee />
              </React.Suspense>
            }
          />
          <Route
            path="dogovor-oferty"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ContractOfer />
              </React.Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ContactUs />
              </React.Suspense>
            }
          />
          <Route
            path="zakaz-prinyat"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <OrderSuccessPage />
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
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
