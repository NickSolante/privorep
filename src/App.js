import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import './App.css'
import AuthRouter from './containers/authRouter'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthRouter />
      </Router>
    </Provider>
  )
}

export default App
