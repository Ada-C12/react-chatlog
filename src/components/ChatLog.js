import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatMessages = props.messages.map((message, i) => {
    return (
      <chatEntry key={i}
          sender={message.sender} 
          body={message.body}
          timeStamp={message.timeStamp} />
    );
});
  return (
    <section className='chat-log'>
      <ul> {chatMessages} 
      </ul>
    </section>
    );
  };

  ChatLog.propTypes ={
    entries: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string)
    ),
  };

export default ChatLog;