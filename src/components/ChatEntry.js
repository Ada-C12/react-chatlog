import React from "react";
import "./ChatEntry.css";
import Timestamp from "./Timestamp";

const ChatEntry = props => {
  return (
    <div className="">
      <p className="">{props.sender}</p>
      <p className="">{props.body}</p>
      <p className="">
        <Timestamp time={props.timeStamp}></Timestamp>
      </p>
    </div>
  );
};

export default ChatEntry;
