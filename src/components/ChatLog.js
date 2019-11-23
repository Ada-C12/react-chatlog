import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const local = props.local;
  
  return props.chatMessages.map ((entry, i) => {
    return (
      <section key={i}>
        <ChatEntry time={entry.timeStamp} body={entry.body} sender={entry.sender} local={local}/>
      </section>
    );
  });
  
}


export default ChatLog;