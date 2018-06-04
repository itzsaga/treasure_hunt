export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LATEST_SUCCESS':
      return action.latestProducts
    case 'FETCH_ALL_SUCCESS':
      return action.allProducts
    default:
      return state
  }
}