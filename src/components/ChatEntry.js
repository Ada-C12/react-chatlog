import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return(
    <section className="chat-entry">
      <p> {props.sender} </p>
      <p> {props.body}</p>
      <p> <Timestamp time = {props.time} /></p>
    </section>
  );
}

export default ChatEntry;