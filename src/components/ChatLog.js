import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const ChatLog = (prop) => {

  const messageComponents = prop.messages.map((message, i) => {

    return (
      <div>
        <div>
          <ChatEntry sender = {message.sender}
            body = {message.body}
            timeStamp = {message.timeStamp}/>
        </div>
      </div>
    );
  });

  return messageComponents

}

export default ChatLog;