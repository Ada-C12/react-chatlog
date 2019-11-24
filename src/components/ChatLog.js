import React from "react";
import "./ChatLog.css";
import ChatEntry from "./ChatEntry";

const ChatLog = props => {
  const chatMessages = props.chats.map((message, i) => {
    return (
      <li key={i}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </li>
    );
  });

  return (
    <ul>
      <li>{chatMessages}</li>
    </ul>
  );
};

export default ChatLog;
