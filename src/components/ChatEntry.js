import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const senderPerson = props.sender
  const chatBubble = senderPerson === 'Vladimir' ? 'local' : 'remote';

  return (
    <section className={`chat-entry ${chatBubble}`}>
    <h2 className='entry-name'> {senderPerson} </h2>
    <section className='entry-bubble'>
      <p className='entry-body'> {props.body} </p>
      <p className='entry-time'> <Timestamp time={props.timestamp} /> </p>
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