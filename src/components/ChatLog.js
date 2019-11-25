import React from 'react';
import ChatEntry from './ChatEntry'

const ChatLog = (props) => {

  const chatLogElements = props.chat.map((chat, i) => {
    return(
      <li key={i}>
        <ChatEntry author={chat.sender} text={chat.body} time={chat.timeStamp} /> 
      </li>
    );
  });

  return (
    <ul>
      {chatLogElements}
    </ul>
  )

};

export default ChatLog;