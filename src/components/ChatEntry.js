import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';


const ChatEntry = (props) => {
  
  let chatClassName = "chat-entry local";
  if (props.sender === "Estragon"){
    chatClassName = "chat-entry remote";
  }
  return(
    <div className = {chatClassName}>
      <h3 className = "entry-name">{props.sender}</h3>
        <section className = "entry-bubble">
          <p>{props.body}</p>
          <p className = "entry-time"><Timestamp time = {props.timestamp}/></p>
        </section>
    </div>
  );
}

export default ChatEntry;