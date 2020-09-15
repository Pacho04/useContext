import React, { useRef, useLayoutEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const [boxsize, setBoxsize] = useState({});
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];

    const parrafoTag = useRef();

    useLayoutEffect(() => {
        
        setBoxsize(parrafoTag.current.getBoundingClientRect() );

    }, [quote])


    return (
        <div>
            <h2>LayoutEffect</h2>
            <hr></hr>

             <blockquote className="blockquote text-right">
                 <p 
                    ref={parrafoTag}
                    className="mb-0"
                 > 
                 {quote}
                 </p> 
             </blockquote>

             <pre>
                 {JSON.stringify(boxsize, null, 3)}
             </pre>
                   
            <button className="btn btn-primary" onClick={increment}>
                Siguiente Frase
            </button>

        </div>
    )
}