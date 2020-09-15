import React from 'react';
import '../02-useEffect/effect.css';

export const ShowIncrement = React.memo(({incremet}) => {

    console.log('me genere de nuevo :('); 

    return (
        <button
            className="btn btn-outline-primary"
            onClick={() => {
                incremet(5);
            }}
        >
            Increment
        </button>
    )
})
