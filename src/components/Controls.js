// handle on-click move buttons for n, s, e, w

import React from "react";

const Controls = (props) => {
    console.log('props in Controls', props)

    return (
        <div>
            <button
                className='direction-button'
                onClick={e => props.move(e, 'n')}
            > 
            N
            </button>
            <button
                className='direction-button'
                onClick={e => props.move(e, 'e')}
            >
            E
            </button>
            <button
                className='direction-button'
                onClick={e => props.move(e, 's')}
            >
            S
            </button>
            <button
                className='direction-button'
                onClick={e => props.move(e, 'w')}
            >
            W
            </button>
            {/* display buttons and pass down or handle onClick event listeners in this component */}

        </div>
    )
}

export default Controls;