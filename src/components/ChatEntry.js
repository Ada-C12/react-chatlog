import React from 'react'
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timestamp = props.timeStamp;
  
  return (
    <div className="chat-entry">
      <h1 className="entry-name">{sender}</h1>
      <p className="entry-bubble">{body}</p>
      <Timestamp className="entry-time" time={timestamp} />
    </div>
  );
}

export default ChatEntry;