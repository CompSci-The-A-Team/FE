// Need to change file name --not great
// displays controls component
// needs room data and room props
// handle Logout at the bottom of this major component?
//DATA

import React from "react";
import Controls from "./Controls";
import GameData from "./GameData";

const RightSide = (props) => {
    console.log('props in Right Side', props)
    return (
        <div className='game-info-container'>
            <Controls move={props.move} />
            <GameData gameData={props.gameData} userData={props.userData} />
            {/* <Logout /> */}

        </div>
    )
}

export default RightSide;