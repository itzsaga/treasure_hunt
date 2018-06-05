export const createUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(({ user, token }) => {
        dispatch({ type: 'AUTH_COMPLETE', user })
        localStorage.setItem('token', token)
      })
  }
}