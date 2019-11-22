import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatMessages = props.message_list.map((message, i) => {
    return (
      <ChatEntry key={ i } message= { message } />
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