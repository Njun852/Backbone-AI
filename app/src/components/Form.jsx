import React from "react"
import {nanoid} from "nanoid"

export default function Form(props){


    const [message, setMessage] = React.useState("")
    function typeMessage(event){
        const {value} = event.target
        setMessage(value)
    }

    async function getResponse(prompt){
        fetch(`http://localhost:5050/?prompt=${prompt}`)
        .then(data => data.json())
        .then(data => props.submit({
            sender: 'ai',
            message: data.response,
            id: nanoid()
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
        props.submit({
            sender: 'user',
            message: message,
            id: nanoid()
        })
        getResponse(message)
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                onChange={typeMessage}
                value={message}
            />
            <button>Send</button>
        </form>
    )
}