import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'
const mystyle = {
  color: 'black',
  fontFamily: 'Open Sans',
  fontStyle: 'light 300',
  fontSize: 'xx-large',
  fontWeight: '50'
}
const shadow = {
  boxShadow: '5px 10px #3B424D '
}

function Login({ login }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <Card style={shadow} className='px-5'>
        <Card.Body>
          <Card.Title style={mystyle} className='py-3'>
            Login
          </Card.Title>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Email Address'
                icon='fas fa-envelope'
                onChange={onChangeEmail}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={onChangePassword}
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'></Form.Group>
            <Button
              variant='primary'
              type='submit'
              onClick={e => {
                e.preventDefault()
                login(email, password)
              }}
            >
              <strong>LOG IN</strong>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
