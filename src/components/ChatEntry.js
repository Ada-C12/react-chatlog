import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return (
    <>
      <h3>{props.sender}</h3> 
      <p>{props.body}</p>
      <Timestamp time={props.timestamp} />    
    </>
  )
}

export default ChatEntry;