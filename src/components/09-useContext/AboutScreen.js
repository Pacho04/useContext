import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    
    const {user,setUser} = useContext(UserContext);
    
    const handleSetUser = () =>{
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr></hr>

            <pre>
                {
                    JSON.stringify(user,null, 3)
                }
            </pre>  

            <button
                className="btn btn-warning"
                onClick={handleSetUser}
             >Logout</button>  
        </div>
    )
}
