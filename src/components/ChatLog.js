import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const events = props.events;

  const ChatEntries = events.map((event, i) => {
      return (
        <p key={i}>
          <ChatEntry timestamp={ event.timeStamp } sender={ event.sender } body={ event.body }/>
        </p>
      );
    });

  return (
      <section className="chat-log">
        <p>
          {ChatEntries}
        </p>
      </section>
    );
}

export default ChatLog;