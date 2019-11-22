import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatEntry = (props) => {
  console.log(props.messages)
  return (
    props.messages.map((message) => (
      <ChatEntry
         person={message.sender}
         status={message.body}
         timestamp={message.timestamp}
      />
    ))
  )
  }

export default ChatLog;