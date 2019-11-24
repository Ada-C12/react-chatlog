import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  return (
  <div className='chat-entry'>
    <h1 className='entry-name'>{ props.sender }</h1>
    <h3 className='entry-bubble'> { props.body }</h3>
    <Timestamp className='entry-time' time={props.timeStamp}/>
  </div>
  );
};

export default ChatEntry;