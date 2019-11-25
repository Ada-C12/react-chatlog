import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const Chatlog = (props) => {
  const messages = props.messages;
  const messagesEntries = messages.map((message, i) => {
    return (
      <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} key={i}/>
    )
  })

  return (
    <div className="chat-log">
      {messagesEntries}
    </div>
  );
}

export default Chatlog;