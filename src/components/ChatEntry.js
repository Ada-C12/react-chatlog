import React from 'react';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {

  let timestamp = <Timestamp time={props.timeStamp} />
  let body = props.entry.body;
  let name = props.entry.sender;
  

  return (
    <section className="chat-entry">
      <section className="entry-name">{name}</section>
      <section className="entry-time">{timestamp}</section>
      {/* <img src={speechBubbleL} className="bubble"></img> */}
      <section className="entry-bubble">{body}</section>

    </section>
  );
}


export default ChatEntry;