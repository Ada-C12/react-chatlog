import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {

  const listOfChats = props.data;
  const arrayOfChats = listOfChats.map((chat, i) => {
    return(
      <ChatEntry
        sender = {chat.sender}
        body = {chat.body}
        time = {chat.timeStamp}
        local = {props.local}
        remote = {props.remote}
        />
    )
  });

  return(
    <section>
      {arrayOfChats}
    </section>
  )
};


export default ChatLog;