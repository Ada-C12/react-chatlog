import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';


const ChatEntry = (props) => {

  const timestamp = <Timestamp time={props.time} />
  const body = props.body;
  const sender = props.sender;
  const local = props.local;

  // assign which side of the screen the speech bubble will go
  let senderCSS = null;
  if (sender === local) {
    senderCSS = "chat-entry local";
  } else {
    senderCSS = "chat-entry remote";
  }

  return (
    <section className={senderCSS}>
      <section className="entry-name">{sender}</section>
      <section className="entry-bubble">
        {body}
        <section className="entry-time">{timestamp}</section>
      </section>
    </section>
  );
  
  
}


export default ChatEntry;