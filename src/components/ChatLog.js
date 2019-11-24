import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messageList = props.messages;
  const messages = messageList.map((message, i) => {
    return (
      <section key={i}>
        <ChatEntry
        sender={message.sender}
        body={message.body}
        time={message.timeStamp}
        />
      </section>
    )
  });

  return (
    <section className='chat-log'>
      <section>{messages}</section>
    </section>
  )
};

ChatLog.propTypes = {
  messages: PropTypes.array,
  // messages: PropTypes.shape({
  //   sender: PropTypes.string.isRequired,
  //   body: PropTypes.string.isRequired,
  //   timeStamp: PropTypes.string.isRequired,
  // })
};

export default ChatLog;
