export const getLatest = () => {
  return async dispatch => {
    const products = await fetch(`http://localhost:3000/api/products/latest`)
    .then(res => res.json())
    dispatch({ type: 'FETCH_LATEST_SUCCESS', products })
  }
}