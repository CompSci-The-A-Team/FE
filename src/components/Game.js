// Display Map and Right-Side component 
// Handle Room Data, Map, PlayerData (name)
// Handle GET and POST
// pass down user, move, game data and map data props from here (loading data?)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import RightSide from './Right-Side'
import { axiosWithAuth } from '../util/axiosWithAuth';


const Game = (props) => {
    const [ userData, setUserData ] = useState({}) // just player name for now
    const [ mapData, setMapData ] = useState({})
    const [ gameData, setGameData ] = useState({})

    useEffect(() => {
        //axios GET adventure init endpoint
            // set user data
            // set room data
            // set map data
        axiosWithAuth()
            .get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
            .then(res => {
                console.log('init', res)
                setUserData({ name: res.data.name})
                setGameData(res.data)
               
            })
            .catch(err=> {
                console.log(err)

            })
        axiosWithAuth()
            .get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/')
            .then(res => {
                console.log('rooms', res)
                setMapData(res.data.map)
            })
            .catch(err=> {
                console.log(err)

            })
    }, [])

    const move = (e, direction) => {
        e.preventDefault()
        //axios POST to adventure move endpoint
            // set room data on response
            // maybe set map data
        axiosWithAuth()
            .post('https://lambda-mud-test.herokuapp.com/api/adv/move/')
            .then(res => {
                console.log('post res', res)
                setGameData(res.data)

            })
            .catch(err => console.log(err))
    }

    return(
        <div className='game-container'>

            <Map mapData={mapData} />
            
            <RightSide 
                move={move}
                gameData={gameData}
                setGameData={setGameData}
                userData= {userData}
                // Logout?
            /> 
           
        </div>
    )
}

export default Game;