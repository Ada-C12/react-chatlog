import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {

  

  const chatLog = props.chatMessages.map ((entry, i) => {
    return(
      <ChatEntry time={entry.timeStamp} body={entry.body} sender={entry.sender}/>
    );
  });

  return (
    <section>
      {chatLog}
      
    </section>
  );
    
}


export default ChatLog;