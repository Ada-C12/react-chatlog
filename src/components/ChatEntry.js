import React from 'react';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  
  return (
    <section>
      <h1>{props.sender}</h1>
      <h2>{props.body}</h2>
      <h2><Timestamp time={props.timeStamp}/></h2>
    </section>
  );
};


export default ChatEntry;