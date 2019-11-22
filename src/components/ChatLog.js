import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const local = props.message_list[0].sender;
  
  const chatMessages = props.message_list.map((message, i) => {
    const senderIsLocal = (message.sender === local) ? true : false;
    return (
      <ChatEntry key={ i } message={ message } local={ senderIsLocal }/>
    );
  });

  return (
    <section>
      { chatMessages }
    </section>
  )
}

ChatLog.propTypes = {
  message_list: PropTypes.array.isRequired,
}

export default ChatLog;