import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
const mystyle = {
  color: 'black'
}
const shadow = {
  boxShadow: '5px 10px #3B424D'
}

function Login() {
  return (
    <div>
      <Card style={shadow}>
        <Card.Body>
          <Card.Title style={mystyle}>Login</Card.Title>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Email Address'
                icon='fas fa-envelope'
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'></Form.Group>
            <Button variant='primary' type='submit'>
              <strong>LOG IN</strong>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
