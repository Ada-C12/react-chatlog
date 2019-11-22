import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  
  return (
    <section className='chat-entry local'>
      <p className='entry-name'>{props.sender}</p>
      <p className='entry-bubble'>{props.body}
        <p className='entry-time'><Timestamp time={props.time}/></p>
      </p>
    </section>
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ChatEntry;