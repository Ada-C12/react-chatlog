import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const messageComponents = props.messages.map((message, i) => {
  
  return (
    <div className="" key={i}>
      <ChatEntry sender={message.sender} body={message.body} timestamp={message.timeStamp} />
    </div>
  );
});

return messageComponents;
}
export default ChatLog;
