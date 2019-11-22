import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = ({entry: {sender, body, timeStamp}}) => {
   
  return (
    <div className="chat-entry">
      <section className="entry-bubble">
        <p className="entry-name">{sender}</p>
        <p>{body}</p>
        <p className="entry-time"><Timestamp time={timeStamp}/></p>
      </section>
    </div>
  );
};

export default ChatEntry;