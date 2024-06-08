import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/slice'
import cartSlice from './cart/slice'
import balloonsSlice from './products/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    product: balloonsSlice,
  },
})

export const useAppDispatch = () => useDispatch()
