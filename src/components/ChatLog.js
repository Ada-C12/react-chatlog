import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const messageComponents = props.messages.map((message, i) => {
    return (

      <div key={i}>
        <ChatEntry
          origin={origin(i)}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          />
      </div>
    )
  })

  return (
    <section>
      <div className="chat-log">{messageComponents}</div>
    </section>
  )
}

// from the json data, we can tell that EVERY OTHER element is Valdimir and Estragon, so we can use key={i} to access the element index and determine whether to assign local or remote.
const origin = (key) => {
    if (key % 2 === 0) {
      return "local";
    } 
    return "remote";
}

export default ChatLog;