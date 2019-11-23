import React from 'react';
import './ChatEntry.css'
import chatMessages from '../data/messages.json'
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  
// const message = chatMessages[0];

  return (
  <div className="chat-entry">
    <div className="entry-name">
    {props.message.sender}
    </div>
    <div className="entry-bubble">
    {props.message.body}
    <div className="entry-time"><Timestamp 
    time={props.message.timeStamp}/>
    </div>
    </div>
  </div>
  )
}

export default ChatEntry;