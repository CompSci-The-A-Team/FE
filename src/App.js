import React from "react";
import { BrowserRouter as Router,  Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import WelcomeScreen from "./components/WelcomeScreen"
import Register from "./components/Register";
import LandingPage from "./components/LandingPage"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={WelcomeScreen} />
        <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);

