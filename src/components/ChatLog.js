import React from 'react';
import './ChatLog.css';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allChats = props.chats.map((chat, i) => {
    return (
      <section key={i}>
        <div>
          <ChatEntry entry={chat} />
        </div>
      </section>
    )
  })

  return(
    <section className='chat-log'>
      <div>
        {allChats}
      </div>
    </section>
  );
};

export default ChatLog;


