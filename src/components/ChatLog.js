import React from 'react';
import ChatEntry from './ChatEntry';

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
    <section>
      <p>{entriesComponents}</p>
    </section>
  )
}

export default ChatLog;
