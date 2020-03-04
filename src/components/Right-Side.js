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
        <div>
            <Controls move={props.move} />
            <GameData gameData={props.GameData} userData={props.GameData} />
            {/* <Logout /> */}

        </div>
    )
}

export default RightSide;