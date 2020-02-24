import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import Login from '../components/Login'

function Auth({ login, getAuthToken }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Login className='mt-3' login={login} getAuthToken={getAuthToken} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
