// handle on-click move buttons for n, s, e, w

import React from "react";

const Controls = (props) => {
    console.log('props in Controls', props)

    return (
        <div className='controls-container'>
            <h3 className='controls-header'>Controls</h3>
            {/* <div className='control-buttons'> */}
                <div className='direction-controls'>
                <button
                    className='direction-box direction-button'
                    onClick={e => props.move(e, 'n')}
                > 
                N
                </button>
                <button
                    className='direction-box direction-button'
                    onClick={e => props.move(e, 'e')}
                >
                E
                </button>
                <button
                    className='direction-box direction-button'
                    onClick={e => props.move(e, 's')}
                >
                S
                </button>
                <button
                    className='direction-box direction-button'
                    onClick={e => props.move(e, 'w')}
                >
                W
                </button>
                {/* display buttons and pass down or handle onClick event listeners in this component */}
                </div>
            {/* </div> */}
     
        </div>
    )
}

export default Controls;