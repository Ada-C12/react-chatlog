import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let selectStyles = `chat-entry ${props.source}`

  return(
    <span className={selectStyles}>
      <p className='entry-name'>{props.sender}</p>
      <p className='entry-bubble'>
        {props.body}
        <p className='entry-time'>
          <Timestamp time={props.timeStamp} />
        </p>
      </p>
    </span>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  source: PropTypes.string,
};

ChatEntry.defaultProps = {
  source: 'local',
};

export default ChatEntry;