import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/slice'
import cartSlice from './cart/slice'
import pizzaSlice from './pizza/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
})


export const useAppDispatch = () => useDispatch()
