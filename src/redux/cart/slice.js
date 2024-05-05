import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import getCartFromLS from '../../utils/getCartFromLS'
import calcTotalPrise from '../../utils/calcTotalPrise'

const initialState = getCartFromLS()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id)
      if (findItems) {
        findItems.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = calcTotalPrise(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem && findItem.count > 1) {
        findItem.count--
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
