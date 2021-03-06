export const createUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(({ user, token }) => {
      dispatch({ type: 'AUTH_COMPLETE', user })
      localStorage.setItem('token', token)
    })
  }
}

export const login = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(({ user, token }) => {
      dispatch({ type: 'AUTH_COMPLETE', user })
      localStorage.setItem('token', token)
    })
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT' }
}
