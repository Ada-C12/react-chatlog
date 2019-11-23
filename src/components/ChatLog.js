import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chatEntries = props.messages.map((message, i) => {
    let source = '';
    if (message.sender === "Vladimir") {
      source = 'local';
    } else {
      source = 'remote';
    };

    return(
      <div className='chat-log'>
        <span i = {i}>
          <ChatEntry
            sender={message.sender} 
            body={message.body} 
            timeStamp={message.timeStamp}
            source={source}
          />
        </span>
      </div>
    );
  });

  return chatEntries;
};

export default ChatLog;