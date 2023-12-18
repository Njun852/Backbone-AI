import React from "react"

export default function Chat(props){
    return (
        <div className={`chat ${props.sender === 'user' && 'user'}`}>
            <p>{props.message}</p>
        </div>
    )
}