
const calcTotalPrise = (items) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}

export default calcTotalPrise
