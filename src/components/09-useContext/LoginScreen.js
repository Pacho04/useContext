import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr></hr>

            <button
                className="btn btn-outline-primary"
                onClick={() => setUser({
                    id: 1234,
                    name: 'David Sanchez Motran'
                })}
            >
                Login
            </button>
        </div>
    )
}
