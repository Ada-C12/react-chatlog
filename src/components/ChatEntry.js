import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

    const messageType = () => {
      let selectStyles = '';
      selectStyles = (props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote');
      return selectStyles
    }

  return (
    <p className={messageType()}>
      <div className="entry-name">{props.sender}</div>
      <div className="entry-bubble">{props.body}
        <div className="entry-time"><Timestamp time={props.timestamp} /></div>   
      </div>
    </p>
    );
  };

export default ChatEntry;