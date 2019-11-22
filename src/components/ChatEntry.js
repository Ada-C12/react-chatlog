import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  
  let status = 'local'
  if (props.sender === 'Vladimir') {
    status = 'remote'
  };

  return (
    <section className={`chat-entry ${status}`}>
      <p className='entry-name'>{props.sender}</p>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'><Timestamp time={props.time}/></p>
      </section>
    </section>
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ChatEntry;