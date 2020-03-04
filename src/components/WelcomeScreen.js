import React from "react";
import {Button} from 'semantic-ui-react';

const WelcomeScreen = () => {
    return (
      <div className="WelcomeScreen">

          <h1>Welcome</h1>
          <p>The story of the game here</p>
<h1>How to Play</h1>
<p>The directions of the game here</p>
<Button className="WelcomeButton" > Let's Play</Button>
      </div>
    )
}
export default WelcomeScreen;