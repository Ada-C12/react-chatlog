import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = ({sender, body, timestamp, location}) => {
  // const alignmentClass = location == true ? "chat-entry local" : "chat-entry remote";
  
  return (
    <div className="chat-entry local remote">
      <div className="entry-name">
        {sender}
      </div>
      <div className="entry-bubble">
        {body}
        <div className="entry-time"><Timestamp className="entry-time"  time={timestamp} /></div>
      </div>
    </div>
  )
}

export default ChatEntry;
