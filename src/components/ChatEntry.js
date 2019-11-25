import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  let users = props.users
  let user_class = 'chat-entry remote'
    if (props.sender === users[1]) {
      user_class = 'chat-entry local'
    }
  let time = <Timestamp time={props.timeStamp}/>

  return(
    <section className={user_class}>
      <h2 className='entry-name'> {props.sender} </h2>
      <section className='entry-bubble'>
        <p> {props.body}</p>
        <p className='entry-time'> {time} </p>
      </section>
    </section>
  );
};

export default ChatEntry;