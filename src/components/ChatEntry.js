import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({sender, body, timeStamp}) => {
  let senderClass = 'chat-entry local'
  if (sender === 'Estragon') {
    senderClass = 'chat-entry remote'
  }

  return (
    <div className={senderClass}>
      <p className='entry-name'>{sender}</p>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className='entry-time'>{timeStamp}</p>
      </section>
    </div>
    
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default ChatEntry;