import React from 'react';
import './ChatLog.css';
// import Timestamp from './Timestamp';
import ChatEntry from './ChatEntry';

const ChatLog = ({chatMessages}) => {
  const chatEntries = chatMessages.map((message, i) => {
    const local = message.sender === "Vladimir" ? true : false;

    return (
      <ChatEntry
        key={i}
        sender={message.sender}
        body={message.body}
        timestamp={message.timestamp}
        local={local}
      />
    )

  });

  return (
    <div className="chat-log">
      {chatEntries}
    </div>
  )
}

export default ChatLog;
