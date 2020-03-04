// handle on-click move buttons for n, s, e, w

import React from "react";

const Controls = (props) => {
    console.log('props in Controls', props)

    return (
        <div>
            <button>N</button>
            <button>E</button>
            <button>S</button>
            <button>W</button>
            {/* display buttons and pass down or handle onClick event listeners in this component */}

        </div>
    )
}

export default Controls;