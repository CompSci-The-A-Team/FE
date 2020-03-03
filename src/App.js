import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <nav>
          <div className='title'>
          <h1>Enter The Ocean Game</h1>
        </div>
              <Button ><NavLink className='navLink' to='/register'>New Player?</NavLink></Button>
              <Button > <NavLink className='navLink' to='/login'>Existing Player</NavLink></Button>
          </nav>
        </header>



        <div>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);