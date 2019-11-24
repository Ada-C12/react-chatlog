import React from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const chatBubble = props.sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <section className={`chat-entry ${chatBubble}`}>
      <h2 className='entry-name'> {props.sender} </h2>
      <section className='entry-bubble'>
        <p className='entry-body'> {props.body} </p>
        <p className='entry-time'> <Timestamp time={props.timeStamp} /> </p>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  timestamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default ChatEntry;