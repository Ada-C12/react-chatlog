import React from 'react'
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.messages.map ((message, i) => {
    return (

      <ChatEntry key={i}
        sender={ message.sender }
        body={ message.body }
        timeStamp={ message.timeStamp} />
    );
  });

  return (
    <ul className="chat-log">
      {chatComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ),
};

export default ChatLog;