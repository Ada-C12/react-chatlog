import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = ({sender, body, timestamp, local}) => {
  const alignmentClass = local === true ? "local" : "remote";
  
  return (
    <div className={`chat-entry ${alignmentClass}`}>
      <div className="entry-name">
        {sender}
      </div>
      <div className="entry-bubble">
        {body}
        <div className="entry-time">
          <Timestamp  time={timestamp} />
        </div>
      </div>
    </div>
  )
}

export default ChatEntry;
