import axios from 'axios'

export const AUTH_TOKEN_CHANGE = 'AUTH_TOKEN_CHANGE'

export const login = (email, password) => async dispatch => {
  const res = await axios
    .post('http://35.201.2.209:8000/login', {
      email,
      password
    })
    .catch(function(error) {
      console.log(error)
    })
  dispatch({ type: AUTH_TOKEN_CHANGE, payload: res })
}
