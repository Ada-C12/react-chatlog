import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  let chats = props.chats
  console.log(`here are the ${chats}`)
  const chatComponents = chats.map((chat, i) => {
    return (
      <section key={i}>
        <ChatEntry
          sender={chat.sender} 
          body={chat.body}
          time={chat.time} 
          users = {props.users}
        />
      </section>
    );
  });
  
  return(
    <section>
      <section className="chat-log"> {chatComponents} </section>      
    </section>
  );
};

export default ChatLog;