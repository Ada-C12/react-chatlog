import React from 'react';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  return (
    <section className = "">
      <p>{props.sender}</p>
      <p>{props.body}</p>
      <p><Timestamp time={props.timestamp}/></p>
    </section>
  );
}

export default ChatEntry;
