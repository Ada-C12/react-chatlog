import React from 'react';
import './ChatLog.css';
import chatLog from '../data/messages.json'
import ChatEntry from './ChatEntry';

const ChatLog = () => {
const chatLogComponents = chatLog.map((message,i)=> {
return(
  <ChatEntry
    sender={message.sender}
    body={message.body}
    timestamp={message.timestamp}
  />
)

  })
  return(
    <section className="chat-log">
      <p> {chatLogComponents}</p>

    </section>
  );
}

export default ChatLog;