import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
   const entryStyle = (props.sender) === 'Vladimir'? 'chat-entry local' : 'chat-entry remote';

  return (
    <section className={entryStyle}>
      <p className='entry-name'>{props.sender}</p>
      <section className='entry-bubble'>
        <p>{props.body}</p>
      <p className='entry-time'>
        <Timestamp time={props.timeStamp}/></p>
        </section>
    </section>
  ); 
}

export default ChatEntry;