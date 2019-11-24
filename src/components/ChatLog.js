import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const Chatlog = (props) => {

  const ChatEntryComponents = props.messages.map((message, i) => {
    return (
      <section key={i}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timestamp={message.timestamp}
        />
      </section>
    )
  })
  
  return (
    <section className="chat-log">
      {ChatEntryComponents}
    </section>
  )
}

export default Chatlog;
