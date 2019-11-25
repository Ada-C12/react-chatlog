import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let style = 'chat-entry';

  if (props.sender === 'Vladimir') {
    style = style + ' local'
  } else {
    style = style + ' remote'
  }

  return(
    <section className={style}>
      <div className='entry-name'>
        {props.sender}
      </div>
      <div className='entry-bubble'>
        {props.body}
        <div className='entry-time'>
        <Timestamp time={props.timeStamp} />
        </div>
      </div>
    </section>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;