import React from "react";

const GameData = (props) => {
    console.log('props in gameData', props)
    console.log('player username in gameData', props.gameData.players)
    return (
        <div>
            <h2 style={{color: "red"}}>Welcome {props.userData.name}</h2>
            <h3>There is a Fish in this room: his message says to find the twilight zone north</h3>
            <h4>1 x Magic Shell</h4>
            

            <h4 style={{color: "red"}}>You are currently in room: {props.gameData.title}</h4>
            <h4 style={{color: "red"}}>Room Description: {props.gameData.description}</h4>

            {/* <h4>Players in this room: </h4> */}
            {/* <p>{props.gameData.players[1]}</p> */}
            {props.gameData.players && (
                <div>
                <h3>Players in room: </h3>
                <p style={{color: "red"}}>{props.gameData.players[0]}</p>
                <p style={{color: "red"}}>{props.gameData.players[1]}</p>
                </div>
            )}
        </div>
    )
}

export default GameData;