import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import Auth from './containers/auth'

function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  )
}

export default App
