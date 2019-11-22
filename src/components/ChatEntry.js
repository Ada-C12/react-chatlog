import React from 'react';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return(
    <section className="chat-entry">
      <p className="local entry-name">{props.sender}</p>
      <p className="local entry-bubble">{props.body}</p>
      <p className="local entry-time entry-bubble"><Timestamp time={props.time}/></p>
    </section>
  )
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default ChatEntry;