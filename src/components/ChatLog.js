import React from 'react';
import './ChatLog.css';
import ChatEntry from "./ChatEntry";
import Timestamp from './Timestamp';

const ChatLog = (props) => {
  const chatLogComponents = props.chats.map((chat, i) => {
    return (
      <li key={i}>
        <ChatEntry sender={chat.sender} body={chat.body} timestamp={chat.timeStamp} />
      </li>
    );
  });

  return (
    <ul className="chat-log">
      {chatLogComponents}
    </ul>
  );
};

export default ChatLog;
