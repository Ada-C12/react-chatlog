import React from 'react';
import './ChatEntry.css'
import chatMessages from '../data/messages.json'
import Timestamp from './Timestamp';


const ChatEntry = () => {
  
const message = chatMessages[0];

  return (
  <div className="chat-entry remote">
    <div className="entry-name">
    {message.sender}
    </div>
    <div className="entry-bubble">
    {message.body}
    <div className="entry-time"><Timestamp 
    time={message.timeStamp}/>
    </div>
    </div>
  </div>
  )
}

export default ChatEntry;