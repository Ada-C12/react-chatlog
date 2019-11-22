import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return(
    <section className="chat-entry local">
      <p className="entry-name"> {props.sender} </p>
      <p className="entry-bubble"> {props.body}</p>
      <p className= "entry-time"> <Timestamp time = {props.time} /></p>
    </section>
  );
}

export default ChatEntry;