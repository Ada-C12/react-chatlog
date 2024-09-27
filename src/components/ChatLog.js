import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatLog = props.chatlog.map((message, i) => {
    return <ChatEntry sender={ message.sender } body={ message.body } timeStamp={ message.timeStamp }  key={i} />;
  }
);

  return(
    <section className="chat-log"> { chatLog } </section>
  );
};

export default ChatLog;