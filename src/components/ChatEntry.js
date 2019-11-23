import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry">
      <p className="entry-name"> {props.sender}</p>
      <p className="entry-bubble"> {props.body}</p>
      <p className="entry-time"> <Timestamp time={props.timeStamp}/></p>
    </div>

  );
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}
export default ChatEntry;