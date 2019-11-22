import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const entryClasses = 'chat-entry'
    + ' '
    + (props.local ? 'local' : 'remote');

  return (
    <section className={entryClasses}>
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
  local: PropTypes.bool.isRequired,
}

export default ChatEntry;