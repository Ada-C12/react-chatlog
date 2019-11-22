import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;
  
  const entryComponents = entries.map((entry, i) => {
    return (
      <div className="chat-log">
        <ChatEntry entry={entry} key={i}/>
      </div>
    );
  });
  return entryComponents;
};

export default ChatLog;