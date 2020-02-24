import { AUTH_TOKEN_CHANGE } from '../actions/auth'

const INITIAL_STATE = {
  authToken: null
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_TOKEN_CHANGE:
      return {
        ...state,
        authToken: action.payload
      }
    default:
      return state
  }
}
