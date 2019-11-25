import React from 'react';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  const timestamp
  const entry = props.entry;
  const chatClassName;
  if (entry.sender === "Vladimir"){
    chatClassName = "chat-entry local";
  }else{
    chatClassName = "chat-entry remote";
  }
  return(
    <section className = {chatClassName}>
      <h3 className = "entry-name">{entry.sender}</h3>
        <section className = "entry-bubble">
          <p>{entry.body}</p>
          <p className = "entry-time"><Timestamp time = {entry.timestamp}/></p>
        </section>
    </section>
  );
}

export default ChatEntry;