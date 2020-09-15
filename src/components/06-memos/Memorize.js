import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effect.css';

export const Memorize = () => {
    
    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(10);
    
    
    return (
        <div>
            <h1>Memorize - Counter: <Small value ={ counter }/> </h1>
            <hr></hr>

            <button
                onClick={increment}
                className="btn btn-outline-primary"
            >+1</button>

            <button
                className="btn btn-primary ml-3"
                onClick={() => setShow(!show)}
            >
                show/Hiden {JSON.stringify(show)}
            </button>

        </div>
    )
}
