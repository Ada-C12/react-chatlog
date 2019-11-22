import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {

  return (
    <section className = "chat-entry">
        <p className="entry-name">{props.sender}</p>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timestamp}/></p>
      </section>
    </section>
  );
}

export default ChatEntry;
