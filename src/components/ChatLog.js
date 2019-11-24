import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  console.log(props.messages)
  return (
    props.messages.map((message) => (
      <ChatEntry
         sender={message.sender}
         body={message.body}
         timestamp={message.timestamp}
      />
    ))
  )
  }

export default ChatLog;