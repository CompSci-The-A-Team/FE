import React from "react";

const GameData = (props) => {
    console.log('props in gameData', props)
    console.log('player username in gameData', props.gameData.players)
    return (
        <div className='room-info-container'>
            <h2  className='welcome-user'>Welcome {props.userData.name} !</h2>
            <h4>You are currently in room: <br></br><span style={{color: 'rgb(0, 44, 139)', fontSize:'20px'}}>{props.gameData.title}</span></h4>
            <h4> <span>{props.gameData.description}</span></h4>
            <h4>Starfish King says: The sunlight is north</h4>
            <h3>Items in this room:</h3>
            <h4>1 x Magic Shell</h4>
            {/* <h4>Players in this room: </h4> */}
            {/* <p>{props.gameData.players[1]}</p> */}
            {/* {props.gameData.players && (
                <div>
                <h3>Players in room: </h3>
                <p style={{color: "red"}}>{props.gameData.players[0]}</p>
                <p style={{color: "red"}}>{props.gameData.players[1]}</p>
                </div>
            )} */}
        </div>
    )
}

export default GameData;