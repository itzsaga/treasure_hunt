export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LATEST_SUCCESS':
      return [...state, action.products]
    default:
      return state
  }
}