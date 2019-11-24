import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  return (
  <div className='chat-entry local'>
    <strong className='entry-name'>{ props.sender }</strong>
    <div className='entry-bubble'> 
      <p>
        { props.body }
      </p>
      <Timestamp className='entry-time' time={props.timeStamp}/>
    </div>
  </div>
  );
};

export default ChatEntry;