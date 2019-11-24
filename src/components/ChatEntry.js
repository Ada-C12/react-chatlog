import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  return (
    <section className="">
      <p className="">{props.sender}</p>
      <p className="">{props.body}</p>
      <p className=""><Timestamp time={props.timestamp}/></p>
    </section>
  )
}

export default ChatEntry;