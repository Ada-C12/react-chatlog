import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp.js';

const ChatEntry = (props) => {
  return(
    <span className='chat-entry'>
      <h3 className='entry-name'>{props.sender}</h3>
      <p className='entry-bubble'>
        {props.body}
        <p className='entry-time'>
          <Timestamp time={props.timeStamp} />
        </p>
      </p>
    </span>
  );
};

export default ChatEntry;