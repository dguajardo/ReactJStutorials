import React from 'react'

function Person({person}) {
    return (
        <div>
            <div>
                <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
            </div>
        </div>
    )
}

export default Person
