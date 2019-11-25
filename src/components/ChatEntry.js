import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  let style = 'chat-entry';

  if (props.entry.sender === 'Vladimir') {
    style = style + ' local'
  } else {
    style = style + ' remote'
  }

  return(
    <section className={style}>
      <div className='entry-name'>
        {props.entry.sender}
      </div>
      <div className='entry-bubble'>
        {props.entry.body}
        <div className='entry-time'>
        <Timestamp time={props.entry.timeStamp} />
        </div>
      </div>
    </section>
  );
};

export default ChatEntry;