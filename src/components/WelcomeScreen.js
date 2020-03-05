import React from "react";
import { Button } from "semantic-ui-react";
import {  Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="WelcomeScreen">
      <div className="WelcomeText">
      <h2>Welcome Deep Sea Diver!</h2>
      <p>In this game you have to explore the layers of the vast ocean and save the  coral reef by finding and defeating the Crown of Thrown Starfish. But don't worry, you will have some help along they way. Gather clues, meet some friendly fish and avoid the not so friendly sea creatures.
</p>
&nbsp;
      <h2>How to Play</h2>
      <p>To navigate press 'n' to go north. 'e' to go east, 'w' to go west and 's' to go south.</p>
      <p>Once you reach and defeat the crown and thorns starfish you have won the game and helped save the coral reef.</p>
      &nbsp;
      <h4>You are now ready to begin your Journey. Good Luck </h4>
      &nbsp;
      <Button className="WelcomeButton"> <Link to='/game'> Let's Play </Link></Button>
      </div>
    </div>
  );
};
export default WelcomeScreen;



