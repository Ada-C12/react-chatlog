import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const ChatLog = (props) => {
  
  const chatLog = (props.messages).map((message, i) => {
    return (
      <div class='chat-log'>
      <p key={i}>
        <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
      </p>
      </div>
    ); 
  });

  return (
    chatLog
  );
}

export default ChatLog;
