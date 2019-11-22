import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
const ChatEvent = (props) => {

  const ChatFormatting = () => {
    let classInfo = 'chat-entry';
    const sender = props.message.sender;
    if (sender === props.local) {
      classInfo += ' local ';
    } else {
      classInfo += ' remote';
    }
    return (classInfo);
  }

  const classId = ChatFormatting()
  return(
    <section className={classId}>
      <p className = 'entry-name'>{props.message.sender}</p>
      <div className='entry-bubble'>
        <p >{props.message.body}</p>
        <p className = "entry-time"><Timestamp time = {props.message.timeStamp} /></p>
      </div>
    </section>
    
  );
}

export default ChatEvent;