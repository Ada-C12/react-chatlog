import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  let user_class = 'chat-entry local'
  if (props.sender === "Estragon") {
    user_class = 'chat-entry remote'
  }

  return(
    <section className={user_class}>
      <h3>{props.sender}</h3>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timestamp}/></p>
      </section>
    </section>
  )
}

export default ChatEntry;
