import React from 'react';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const entryType = (props.sender === "Vladimir" ? "local" : "remote") + " chat-entry"

  return(
    <section className={entryType}>
      <span className="entry-name">{props.sender}</span>
      <section className="entry-bubble">
        {props.body}
        <section className="entry-time">{props.timeStamp}</section>
      </section>
    </section>
  )
}

export default ChatEntry;
