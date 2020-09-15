import React, { useState, useEffect } from 'react'
import './effect.css'
import { Message } from './Message'

export const SimpleForm = () => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
    })
    
    const {name, email} = form
    
    useEffect(() => {
        // console.log('se ejecuta una vez');
    }, []);

    useEffect(() => {
        // console.log('cambia el name');
    }, [name]);    
    
    useEffect(() => {
        // console.log('cambia el email');
    }, [email]);   

    const handleInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr></hr>

            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

            </div>
            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

            </div>

            {
                (name === '1234' && <Message/>)
            }

        </>
    )
}
