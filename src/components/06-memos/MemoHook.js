import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import {procesoPesado} from '../../helpers/procesoPesado';

import '../02-useEffect/effect.css';

export const MemoHook = () => {
    
    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(100);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr></hr>

            <p>{memoProcesoPesado}</p>

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