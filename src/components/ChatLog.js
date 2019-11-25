import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chats = props.messages
  
  
  const chatLogComponents = chats.map((chat, i) => {    return (
      <li key={i}>
        <ChatEntry sender={chat.sender} body={chat.body} time={chat.time} />
      </li>
    )
  })

  return (chatLogComponents)
}

export default ChatLog;