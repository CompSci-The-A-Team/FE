// Display Map and Right-Side component 
// Handle Room Data, Map, PlayerData (name)
// Handle GET and POST
// pass down user, move, game data and map data props from here (loading data?)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';


const Game = (props) => {
    const [ userData, setUserData ] = useState({}) // just player name for now
    const [ mapData, setMapData ] = useState({})
    const [ roomData, setRoomData ] = useState({})

    useEffect(() => {
        //axios GET adventure init endpoint
            // set user data
            // set game data
            // set map data
    })

    const move = (e, direction) => {
        e.preventDefault()
        //axios POST to adventure move endpoint
            // set game data
    }

    return(
        <div className='game-container'>

            <Map mapData={mapData} />
            {/* 
            <RightSide 
                move={move}
                roomData={roomData}
                setRoomData={setRoomData}
                userData= {userData}
                Logout?
            /> 
            */}
        </div>
    )
}

export default Game;