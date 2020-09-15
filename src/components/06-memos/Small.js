import React from 'react'

export const Small = React.memo(({value}) => {
    
    console.log('Small se llamo :(');

    return (
            <small>{value}</small>
    )
})
