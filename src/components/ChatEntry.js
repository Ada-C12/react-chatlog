import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';

// Hint: Look into className npm package

const ChatEntry = ({ message }) => {
  const { sender, body, timeStamp } = message;

  return (
    <div className="chat-entry">
      <p className="entry-name">{ sender }</p>
      <p className="entry-bubble">
        <span>{ body }</span> <p className="entry-time"><Timestamp time={timeStamp}/></p>
      </p>
    </div>
  )
}


export default ChatEntry;