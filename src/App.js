import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Game from './components/Game';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <nav>
          <div className='title'>
          <h1>Under The Sea!</h1>
        </div>
              <Button className='bigButton'><NavLink className='navLink' to='/register'>Sign-Up</NavLink></Button>
              <Button className='bigButton'><NavLink className='navLink' to='/login'>Log-In</NavLink></Button>
             {/* <Button className='bigButton'><NavLink className='navLink' to='/game'>Play!</NavLink></Button> */}
          </nav>
        </header>



        <div>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          {/* <Route path='/game' component={Game} /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(App);