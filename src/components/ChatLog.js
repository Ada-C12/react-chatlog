import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
const entries = props.entries;

const entriesComponents = entries.map((entry, i) => {
  
    return(
      <p key = {i} >
        <section>
        <ChatEntry
        sender ={entry.sender}
        body = {entry.body}
        timestamp= {entry.timestamp}
        />
        </section>
      </p>
    )
  });

  return(
    <section className = "chat-log">
      <p>{entriesComponents}</p>
    </section>
  )
}

export default ChatLog;
