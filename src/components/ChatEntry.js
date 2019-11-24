import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

const buildStyles = () => {
  let selectStyles = '';
  selectStyles = (props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote');              
  return selectStyles;
}

  return (
    <section className={buildStyles()}>
        <p className="entry-name">{props.sender}</p>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timestamp}/></p>
      </section>
    </section>
  );
}

export default ChatEntry;
