export const getLatest = () => {
  return async dispatch => {
    const latestProducts = await fetch(`http://localhost:3000/api/products/latest`)
    .then(res => res.json())
    dispatch({ type: 'FETCH_LATEST_SUCCESS', latestProducts })
  }
}

export const getAll = () => {
  return async dispatch => {
    const allProducts = await fetch(`http://localhost:3000/api/products`)
    .then(res => res.json())
    dispatch({ type: 'FETCH_ALL_SUCCESS', allProducts })
  }
}