import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const buildStyles = () => {
    let selectStyles = "chat-entry ";
    selectStyles = selectStyles + (props.sender === props.local ? "local" : "remote");
    return selectStyles;
  }

  return (
    <article className={buildStyles()}>
      <div className="entry-name">{props.sender}</div>
      <div className="entry-bubble">{props.body}
        <div className="entry-time"><Timestamp time={props.timestamp}/></div>
      </div>
    </article>
  );
}

export default ChatEntry;
