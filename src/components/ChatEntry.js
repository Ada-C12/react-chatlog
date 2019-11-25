import React from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css'
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  const senderName = props.sender
  const chatBubble = senderName === 'Vladimir' ? 'local' : 'remote';

return (
    <div className={`chat-entry${chatBubble}`}>
      <h3 className='entry-name'>{props.sender} </h3>
      <div className='entry-bubble'>
        <p className='entry-body'>{props.body}</p>
        <p className='entry-time'><Timestamp time={props.timeStamp}/> </p>
      </div>
    </div>
  );
};

ChatEntry.propTypes = {
  timestamo: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default ChatEntry;