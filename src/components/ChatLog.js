import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chats = props.messages
  
  const chatLogComponents = chats.map((chat, i) => {    return (
      <li key={i} className={`chat-entry ${i % 2 == 0 ? "remote" : "local"}`}>
        <ChatEntry sender={chat.sender} body={chat.body} time={chat.time} />
      </li>
    )
  })

  return (chatLogComponents)
}

export default ChatLog;