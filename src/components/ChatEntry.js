import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import './ChatEntry.css'

const sender = (name) => {
  if (name === "Vladimir") {
    return "local"
  } else {
    return "remote"
  }
}

const chatEntry = (props) => {
  

  return (
    <section className={`chat-entry ${sender(props.sender)}`}>
      <h3 className="entry-name">{props.sender}</h3>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{<Timestamp time = {props.timestamp}/>}</p>
      </section>
    </section>
  );
}

chatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Timestamp).isRequired,
}

export default chatEntry;