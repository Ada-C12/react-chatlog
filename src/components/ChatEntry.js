import React from "react";
import "./ChatEntry.css";
import Timestamp from "./Timestamp";

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

export default ChatEntry;
