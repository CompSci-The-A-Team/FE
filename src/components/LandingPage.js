
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

class LandingPage extends React.Component {

  
  render() {
    return (
      <div className="background-image">
      <div className="Landing">
            <h1>The Ocean Game</h1>
          <div className="startButtons">
            <Button>
              <NavLink className="navLink" to="/register">
                New Player
              </NavLink>
            </Button>
            <Button>
              <NavLink className="navLink" to="/login">
                Existing Player
              </NavLink>
            </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default LandingPage;
