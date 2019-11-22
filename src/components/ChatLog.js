import React from 'react';
import './ChatLog.css';
import ChatEvent  from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.messages
  
  const messageComponents = messages.map((chatMessage, i) => {
    return (
      <div key={i}>
        <ChatEvent message={chatMessage} local={props.local} remote={props.remote}/>
      </div>
    );
  });
 return messageComponents;
};

export default ChatLog;