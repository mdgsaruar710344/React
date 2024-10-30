export const getFromLS = () => {
  const receiveddata = JSON.parse(localStorage.getItem('cart')) || []
  return receiveddata;
}

export const AddToLS = (id) => {
  const storedData = getFromLS();
  storedData.push(id)
  localStorage.setItem('cart', JSON.stringify(storedData))
}


export const RemoveFromLS = (id) => {
  const storedData = getFromLS();
  const updatedLS=storedData.filter(storageId=>storageId!==id)
  localStorage.setItem('cart',JSON.stringify(updatedLS));
}