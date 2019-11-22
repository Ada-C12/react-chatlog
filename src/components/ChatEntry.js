import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import './ChatEntry.css';

const ChatEntry = (props) => {
  return(
    <section className="chat-entry remote">
      <p className="entry-name remote">{props.sender}</p>
      <p className="entry-bubble">
        <p className="local ">{props.body}</p>
        <p className="local entry-time"><Timestamp time={props.time}/></p>
      </p>
    </section>
  )
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default ChatEntry;