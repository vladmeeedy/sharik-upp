import { createSelector } from 'reselect'
export const selectCart = state => state.cart
export const selectCartItemById = createSelector((id) => (state) =>
  state.cart.items.find((obj) => obj.id === id))
