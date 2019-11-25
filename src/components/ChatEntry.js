import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  let selectStyles = ""
  if (props.sender === "Vladimir") {
    selectStyles = "local";
  } else {
    selectStyles = "remote";
  }

  return(
    <section className={`chat-entry ${selectStyles}`}>
      <p className="entry-name"> {props.sender} </p>
      <p className="entry-bubble"> {props.body}<p className= "entry-time"> <Timestamp time = {props.time} /></p></p>
      
    </section>
  );
}

export default ChatEntry;