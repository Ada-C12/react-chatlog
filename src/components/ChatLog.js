import React from 'react';
import './ChatLog.css';
import Bubble from './Bubble.js';


// INSTEAD OF PROPS, could have done {events} within the parens. This is called 'destructuring' and simply pulls the events from props
const ChatLog = (props) => {
  console.log(props);

  let ChatLog = props.messages.map((message, i) => {
    console.log(message)
    return (
      <p key={i}>
        <Bubble sender={message.sender} body={message.body} timestamp={message.timeStamp} />
      </p>
    )
  });
  return (
    <ul>
      { ChatLog }
    </ul>
  );
}

export default ChatLog;