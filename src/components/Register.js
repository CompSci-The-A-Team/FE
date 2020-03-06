import React from 'react';
import axios from 'axios';
import {Form, Button } from 'semantic-ui-react';


class Register extends React.Component {
  state = {
    username: '',
    password1: '',
    password2: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const endpoint = 'https://the-a-team1.herokuapp.com/api/registration/';
    console.log("register is running!")
    axios
      .post(endpoint, this.state)
      .then(response => {
          console.log(response)
        localStorage.setItem('key', response.data.key)
        this.props.history.push('/welcome')
      })
      .catch(error => console.log(error));
  };

  render() {
    return (

      <div className='Container'>
        <h2 style={{color: '#002a50'}}>Create Account</h2>

          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input 
                className='formInput'
                label='Username'
                name='username'
                id='username'
                type='text'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                className='formInput'
                label='Password'
                name='password1'
                id='password1'
                type='password'
                value={this.state.password1}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                className='formInput'
                label='Confirm Password'
                name='password2'
                id='password2'
                type='password'
                value={this.state.password2}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type='submit'> 
            Login
       </Button>
          </Form>
      </div>
    )
  }
}

export default Register;