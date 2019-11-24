import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import './ChatEntry.css';

const ChatEntry = (props) => {
  let status = "local";
  if (props.sender === "Estragon") {
    status = "remote"
  };
  return(
    <section className={`chat-entry ${status} entry-name`}>
      <div className="entry-name">{props.sender}</div>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.time}/></p>
      </section>
    </section>
  )
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default ChatEntry;