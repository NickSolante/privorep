import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'
import * as AuthActions from '../actions/auth'
import LoggedIn from './LoggedIn'
import Auth from './auth'

function AuthRouter({ getAuthToken, history }) {
  useEffect(() => {
    const token = getAuthToken()
    console.log(token)
    if (token) {
      console.log(`this is the token: ${token}`)
      history.push('/loggedIn')
    }
  }, [getAuthToken, history])
  return (
    <div className='authRouter'>
      <header className='App-header'>
        <Switch>
          <Route exact path='/' component={Auth}></Route>
          <Route path='/loggedIn' component={LoggedIn}></Route>
        </Switch>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthRouter))
