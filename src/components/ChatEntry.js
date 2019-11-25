import React from "react";
import "./ChatEntry.css";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";

const ChatEntry = props => {
  const bubbleColor = props.sender === "Vladimir" ? "local" : "remote";

  return (
    <div className={"chat-entry " + bubbleColor}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className="">{props.body}</p>
        <p className="entry-time">
          <Timestamp time={props.timeStamp} />
        </p>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default ChatEntry;
