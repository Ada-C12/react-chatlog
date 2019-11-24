import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.messages
  const messagesLog = messages.map((message, i) => {
    return (
      <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} key={i}/>
    )
 
    });
  return (
  <div> className='chatlog'>
    {messagesLog}
  </div>
  )
};

export default ChatLog;