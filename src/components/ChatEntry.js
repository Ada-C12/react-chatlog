import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  return (
  <div>
    <h1> { props.sender }</h1>
    <h3> { props.body }</h3>
    <Timestamp time={props.timeStamp}/>
  </div>
  );
};

export default ChatEntry;