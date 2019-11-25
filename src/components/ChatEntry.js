import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  return (
    <section>
      <p className="entry-name">{props.sender}</p>
       <div className="entry-bubble">
      <p>{props.body}</p>
      <p><Timestamp time={props.time}/></p>
      </div>
    </section>
  );
};

export default ChatEntry;