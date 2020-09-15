import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null, 
        loading: true, 
        error: null
    })

    useEffect( () => {
        //vacio el cuerpo, lo necesitamos cuando se desmonta

        return () => {
            isMounted.current = false;
        }

    }, [])

    useEffect( () =>{

        setState({data:null,loading:true, error:null}) //para que salga el Loading para cada frase

        fetch( url ) 
            .then( resp => resp.json())
            .then(data => {
    
                if( isMounted.current )
                setState({
                    loading: false,
                    error: null,
                    data
                })
            })

    }, [url])

    return state;

}
