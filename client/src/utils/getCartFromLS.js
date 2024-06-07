import calcTotalPrise from './calcTotalPrise'

export function getCartFromLS() {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrise(items)

  return {
    items: items,
    totalPrice,
  }
}

export default getCartFromLS
