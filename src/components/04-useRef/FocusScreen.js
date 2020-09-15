import React, { useRef } from 'react';
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

    const inputRef = useRef()
    
    const handleFocus = () =>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1> 
            <hr></hr>

            <input
                ref={inputRef} 
                className="form-control"
                placeholder="Tu Nombre"
            ></input>

            <button className="btn btn-outline-primary mt-4" onClick={handleFocus}>Focus</button>

        </div>
    )
}
