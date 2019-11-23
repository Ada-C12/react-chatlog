import React from 'react';
import './ChatEntry.css'
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  
const buildStyles = (sender) => {
  let selectStyles = (sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote');
    return selectStyles;
}

  return (
  <section className={buildStyles(props.message.sender)}>
    <div className="entry-name">
      {props.message.sender}
    </div>
    <div className="entry-bubble">
      {props.message.body}
      <div className="entry-time"><Timestamp time={props.message.timeStamp}/>
      </div>
    </div>
  </section>
  );
};

export default ChatEntry;