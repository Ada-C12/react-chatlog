import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ messages }) => {
  const chatEntries = messages.map((message) => {
    return (
      <ChatEntry message={message} />
    );
  });
  
  return (
    <div>
      { chatEntries }
    </div>
  )
}


export default ChatLog;