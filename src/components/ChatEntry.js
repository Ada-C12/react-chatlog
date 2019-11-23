import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import chatMessages from '../data/messages.json';

const ChatEntry = ({entry: {sender, body, timeStamp}}) => {
  
  // let selectStyles = (sender["Estragon"] ? "local" : 'remote')
  debugger
  let firstSender = chatMessages[0].sender;
  let selectStyles = ( sender === firstSender ? "remote" : "local");
  
  return (
    <div className={`chat-entry ${selectStyles}`}>
      <p className='entry-name'>{sender}</p>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'><Timestamp time={timeStamp}/></p>
      </section>
    </div>
  );
};

export default ChatEntry;