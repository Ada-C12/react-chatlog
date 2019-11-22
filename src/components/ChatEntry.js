import React from 'react'
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timestamp = props.timeStamp;
  
  return (
    <div>
      <h1>{sender}</h1>
      <p>{body}</p>
      <Timestamp time={timestamp} />
    </div>
  );
}

export default ChatEntry;