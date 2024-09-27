import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const buildStyles = (props.sender)  === 'Vladimir'? 'chat-entry local' : 'chat-entry remote'
   
  return (
      <div className={buildStyles}>
        <div className="chat-entry">
        <div className="entry-name"></div>
          <h4>{ props.sender }</h4>
        <div className="entry-bubble">
          <p>{ props.body }</p>
          <p className="entry-time"><Timestamp time={ props.timeStamp }/></p>
        </div>
      </div>
    </div>
  );
};

export default ChatEntry;