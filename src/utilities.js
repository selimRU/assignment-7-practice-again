const getLS = () => {
    const storedData = localStorage.getItem('cart')
    if (storedData) {
        return JSON.parse(storedData)
    }
    return []
}

const saveLS = (cart) => {
   const string = JSON.stringify(cart)
   localStorage.setItem('cart', string)
}

const addDataLS = (id) => {
    const data = getLS()
    data.push(id)
    saveLS(data)
}
export { addDataLS, getLS}