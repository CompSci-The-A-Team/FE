
import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game'
import './App.css';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router,  Route, withRouter } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen"
import LandingPage from "./components/LandingPage"



class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={WelcomeScreen} />
        <Route exact path="/" component={LandingPage} />
      <Route path='/game' component={Game} />

        </div>
      </Router>
    );
  }
}

export default withRouter(App);

