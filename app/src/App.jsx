import React from "react"
import Form from "./components/Form"
import Chat from "./components/Chat"
export default function App(){

    const [chat, setChat] = React.useState([])
    const chatHistory = chat.map(message => {
        return (
            <Chat key= {message.id}sender={message.sender} message={message.message}/>
        )
    })

    function addChat(chat){
        setChat(prevChat => [...prevChat, chat])
    }

    React.useEffect(()=>{
        const chatView = document.querySelector('.chat-history')
        chatView.scrollTo(0,chatView.scrollHeight)
    }, [chat])
    return (
        <div className="app">
            <div className="chat-history">
                {chatHistory}
            </div>
            <Form submit={addChat}/>
        </div>
    )
}