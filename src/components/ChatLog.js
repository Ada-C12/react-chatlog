import React from 'react';
import './ChatLog.css';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allChats = props.chats.map((chat, i) => {
    return (
      <section key={i}>
        <li>
          <ChatEntry entry={chat} />
        </li>
      </section>
    )
  })

  return(
    <section>
      <h3>chat log</h3>
      <ul>
        {allChats}
      </ul>
    </section>
  );
};

export default ChatLog;


