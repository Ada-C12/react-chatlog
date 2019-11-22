import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';




const ChatEntry = (props) => {

  let timestamp = <Timestamp time={props.timeStamp} />
  let body = props.entry.body;
  let name = props.entry.sender;
  
  return (
    <section className="chat-entry">
      <section className="entry-name">{name}</section>
      <section className="entry-bubble">
        {body}
        <section className="entry-time">{timestamp}</section>
      </section>
    </section>
  );
}


export default ChatEntry;