import React from 'react';
import './ChatLog.css';
import ChatEntry from "./ChatEntry";

const ChatLog = (props) => {
  const chatLogComponents = props.chats.map((chat, i) => {
    return (
      <div key={i}>
        <ChatEntry sender={chat.sender} body={chat.body} timestamp={chat.timeStamp} local={props.local} />
      </div>
    );
  });

  return (
    <div className="chat-log">
      {chatLogComponents}
    </div>
  );
};

export default ChatLog;
