import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    })

    const {x, y} = coords

    useEffect(() => {
        //cuerpo del useEffect

        const moveMouse = (e) =>{
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove',moveMouse);

        return () => {
             window.removeEventListener('mousemove',moveMouse);//limpiar el useEffect
        }
    }, [])

    return (
        <div>
            <h1>Mensaje desde otro Componente</h1>
            <p>
                x = {x}
            </p>
            <p>
                y = {y}
            </p>
        </div>
    )
}
