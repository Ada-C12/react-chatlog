import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  return (
    <section className="chat-entry">
      <p className="entry-name">{props.sender}</p>
      <p className="entry-bubble">{props.body}</p>
      <p className="entry-time"><Timestamp time={props.timestamp}/></p>
    </section>
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default ChatEntry;