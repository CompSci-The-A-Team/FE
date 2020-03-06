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
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        //axios GET adventure init endpoint
            // set user data
            // set room data
            // set map data
        axiosWithAuth()
            .get('https://the-a-team1.herokuapp.com/api/adv/init')
            .then(res => {
                console.log('GET init', res)
                setUserData({ name: res.data.name})
                setGameData(res.data)
                setIsLoading(false);
                await_init()

            })
            
            .catch(err=> {
                console.log(err)

            })

    const await_init = () => {
        axiosWithAuth()
            // set map data
            .get('https://the-a-team1.herokuapp.com/api/adv/rooms')
            .then(res => {
                console.log('GET rooms for map', res)
                setMapData(res.data.rooms)
                setIsLoading(false);
            })
            .catch(err=> {
                console.log(err)

            })
    }
        
    }, [])

    const move = (e, direction) => {
        e.preventDefault()
        //axios POST to adventure move endpoint
            // set room data on response
            // maybe set map data
        axiosWithAuth()
            .post('https://the-a-team1.herokuapp.com/api/adv/move/', {direction})
            .then(res => {
                console.log('POST res', res)
                setGameData(res.data)

            })
            .catch(err => console.log(err))
    }


   

    return(
        <div className='game-container'>
            {isLoading ? (
                <p>loading your game...</p>
            ) : (
                <div className='inner-game-container'>
                    <div>
                        <h1 className='game-header'>The Ocean Game</h1>
                    </div>
               <div className='inner-map-and-data-container'>
                <Map mapData={mapData} gameData={gameData}/>
            
                <RightSide 
                    move={move}
                    gameData={gameData}
                    setGameData={setGameData}
                    userData= {userData}
                    
                /> 
                </div>
                </div>
                )} 
            </div>
            )
        }
           



export default Game;