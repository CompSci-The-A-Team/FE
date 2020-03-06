import React from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';


class Login extends React.Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const endpoint = 'http://the-a-team1.herokuapp.com/api/login/';
		console.log("login is working")
	 	axios
		.post(endpoint, this.state)
		.then(response => {
 			localStorage.setItem('key', response.data.key)
			this.props.history.push('/game') 
		})
			.catch(error => console.log(error));
	 };

	render() {
		return (
			<div className='Container'>
				<h2 style={{color: '#002a50'}}>Login In</h2>
				<div className='form'>
					<Form onSubmit={this.handleSubmit}>
						<Form.Input
							className='formInput'
							label='Username:'
							name='username'
							id='username'
							type='text'
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Form.Input
							className='formInput'
							label='Password:'
							name='password'
							id='password'
							type='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Button className='bigButton' type='submit'> Login
					</Button>
					</Form>
				</div>
			</div>
		)
	}
}

export default Login
