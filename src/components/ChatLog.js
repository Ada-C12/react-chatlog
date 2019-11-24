import React from 'react';
// import './Chatlog.css';
import ChatEntry from './ChatEntry';
// import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messages = props.messages
  const chatMessages = messages.map((message,i) => {
    return (
      <div key={i}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          time={message.timeStamp}
        />
      </div>
    )
  })

  return (
    <section className="chat-log">
      {chatMessages}
    </section>
  )
};

// ChatLog.propTypes = {
//   messages: PropTypes.shape({
//     sender: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//   })
// }

export default ChatLog;