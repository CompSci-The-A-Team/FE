import React from "react";

const GameData = (props) => {
    console.log('props in gameData', props)
    return (
        <div>
            <h2>Welcome {props.userData.name}</h2>
            <h3>There is a Fish in this room: his message says to find the twilight zone north</h3>
            <h4>1 x Magic Shell</h4>
            <h4>There are no other players in this room</h4>

            <h4 style={{color: "red"}}>You are currently in room: {props.gameData.title}</h4>
            <h4>Room Description: {props.gameData.description}</h4>

            <h4>Players in this room: </h4>
            {/* {props.gameData.players.map(player => {
                <p key={player} className={player}>
                    {player}
                </p> 
            })} */}
            
        </div>
    )
}

export default GameData;