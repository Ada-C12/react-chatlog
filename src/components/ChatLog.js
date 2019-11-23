import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chatEntries = props.messages.map((message, i) => {
    return(
      <span i = {i}>
        <ChatEntry sendor={message.sendor} body={message.body} timeStamp={message.timeStamp} />
      </span>
    )
  });

  return chatEntries;
};

export default ChatLog;