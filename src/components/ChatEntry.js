import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  return (
    <section className="chat-entry local">
      <p className="entry-name">
        {props.message.sender}
      </p>

      <div className="entry-bubble">
        <p>
          {props.message.body}
        </p>
        <p className="entry-time">
          <TimeStamp moment={props.message.timeStamp} />
        </p>
      </div>
    </section>
  );
}

ChatEntry.propTypes = {
  message: PropTypes.object.isRequired,
}

export default ChatEntry;