import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';




const ChatEntry = (props) => {

  let timestamp = <Timestamp time={props.time} />
  let body = props.body;
  let sender = props.sender;
  const local = props.local;
  
  console.log(local);

  if (sender == local) {
    return (
      <section className="chat-entry local">
        <section className="entry-name">{sender}</section>
        <section className="entry-bubble">
          {body}
          <section className="entry-time">{timestamp}</section>
        </section>
      </section>
    );
  } else {
    return (
      <section className="chat-entry remote">
        <section className="entry-name">{sender}</section>
        <section className="entry-bubble">
          {body}
          <section className="entry-time">{timestamp}</section>
        </section>
      </section>
    );
  }
  
  
}


export default ChatEntry;