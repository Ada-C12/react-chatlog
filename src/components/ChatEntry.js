import React from 'react';
import './ChatEntry.css';


const ChatEntry = (props) => {
  return(
    <section className="local chat-entry">
      <span className="entry-name">{props.sender}</span>
      <section className="entry-bubble">
        {props.body}
        <span className="entry-time">{props.timeStamp}</span>
      </section>
    </section>
  )
}

export default ChatEntry;
