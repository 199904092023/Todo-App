import React from "react"

export const Todo= React.memo(({title,description})=>{
    return <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
})
