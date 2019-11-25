import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js'
import chatMessages from '../data/messages.json';

const ChatLog = () => {
  const chatMessagesList = chatMessages

  const entries = chatMessagesList.map((entry, i) => {
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
