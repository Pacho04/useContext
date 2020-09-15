import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effect.css'

export const FormWithCustomHook = () => {
    
    const [value, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    
    const {name, email, password} = value;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h1>FormWithCustomHook</h1>
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
            <div className='form-group'>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*********"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
