import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = ({entry: {sender, body, timeStamp}}) => {
  
  // let selectStyles = (sender["Estragon"] ? "local" : 'remote')
  let selectStyles = (sender === "Estragon" ? "remote" : "local")
  
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