import React from 'react';
import './ChatLog.css';
import ChatEntry from './components/ChatEntry.js'

const ChatLog = () => {
  const chatEntries = ChatEntry

  const entries = chatEntries.map((entry, i) => {
    return(
      <li key = {i}>
          <ChatEntry sender={entry.sender} body={entry.body} time={entry.timeStamp}/>
      </li>
    );
  }); 
  
  return(
    <ul>
      { entries }
    </ul>
  );
}

export default ChatLog;
