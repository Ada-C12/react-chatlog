import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatCollection = props.allChats.map((chat, i) => {
    return (
        <ChatEntry
          sender={chat['sender']}
          body={chat['body']}
          timeStamp={chat['timeStamp']}
        />
    )
  })
  return (
    <div className='chat-log'>
      {chatCollection}
    </div>
  )
}

ChatLog.propTypes = {
  sender: PropTypes.string.isRequired,
}

export default ChatLog;