import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  return (
    <div className={`chat-entry ${props.origin}`}>
      <div className="entry-name"> {props.sender}</div>
      <div className="entry-bubble"> {props.body}</div>
      <div><Timestamp time={props.timeStamp}/></div>
    </div>
    

  );
  
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default ChatEntry;