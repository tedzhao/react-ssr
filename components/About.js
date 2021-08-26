import React from 'react'

export const About = (props) => {
    return (
        <div>
            <h1>About Page</h1>
            <p>{props.Address1}</p>
            <p>{props.Address2}</p>
        </div>
    )
}