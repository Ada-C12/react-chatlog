import React from 'react';
import './Bubble.css';
import Timestamp from './Timestamp';


const Bubble = (props) => {

  return (
    <div className="bubble">
      <p className="event-sender"> Sender: {props.sender} </p>
      <p className="event-body"> Body: {props.body} </p>
      <p className="event-time"><Timestamp time = {props.timestamp}></Timestamp></p>
    </div>
  );
}

export default Bubble;