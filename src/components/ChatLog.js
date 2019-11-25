import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const ChatLog = (props) => {
  const chatLogMessages = props.messages.map((message, i) => {

    return (
      <section key={i}> 
      < ChatEntry message={message} key={i}/>
      </section>
    )
  });
  
return ( 
  <div className="chat-log">
  {chatLogMessages}
  </div>
  );

  
};

export default ChatLog;