import axios from 'axios'

export const AUTH_TOKEN_CHANGE = 'AUTH_TOKEN_CHANGE'

export const login = (email, password) => async dispatch => {
  console.log(`this is email: ${email} and this is password: ${password}`)

  const res = await axios
    .post('http://35.201.2.209:8000/login', {
      email,
      password
    })
    .catch(function(error) {
      console.log(error)
    })
  localStorage.setItem('token', res.data)
  dispatch({ type: AUTH_TOKEN_CHANGE, payload: res })
}

export const getAuthToken = () => dispatch => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      return null
    }
    dispatch({ type: AUTH_TOKEN_CHANGE, payload: token })
    return token
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const destroyToken = () => {
  localStorage.clear()
}
