import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.messages.map((message, i) => {
    return (
      <section >
        <ChatEntry
          key = {i}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}/> 
      </section>
    );
  });
  return chatEntryComponents
}

export default ChatLog;