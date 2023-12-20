import React from "react"
import {nanoid} from "nanoid"
import axios from "axios"
export default function Form(props){
    const [message, setMessage] = React.useState("")
    function typeMessage(event){
        const {value} = event.target
        setMessage(value)
    }
    async function getResponse(prompt){
        const {data} = await axios.get(`http://localhost:5050/?prompt=${prompt}`)
        props.submit({sender: 'ai', message:data.response, id: nanoid()})
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