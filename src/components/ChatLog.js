import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatLog = props.chatlog.map((message, i) => {
    return <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}  key={i} />;
  }
);

  return(
    <ul> {chatLog} </ul>
  );
};

export default ChatLog;