import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  
  return(
    <section class='chat-entry'>
      <p class='entry-name'>{props.sender}</p>
      <p class='entry-bubble'>{props.body}</p>
      <p class='entry-time'><Timestamp timeStamp={props.timeStamp}/></p> 
    </section>
  );
};

export default ChatEntry;
