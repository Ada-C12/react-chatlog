import React from "react";
import "./ChatLog.css";
import ChatEntry from "./ChatEntry";
import PropTypes from "prop-types";

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

  return <ul className="chat-log">{chatMessages}</ul>;
};

ChatLog.propTypes = {
  chats: PropTypes.array
};

export default ChatLog;
