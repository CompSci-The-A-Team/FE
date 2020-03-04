import React from "react";

const GameData = (props) => {
    console.log('props in gameData', props)
    return (
        <div>
            <h2>Welcome {props.GameData} Player1</h2>
            <h3>There is a Fish in this room: his message says to find the twilight zone north</h3>
            <h4>1 x Magic Shell</h4>
            <h4>There are no other players in this room</h4>
        </div>
    )
}

export default GameData;