import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import Timestamp from './Timestamp';

const ChatLog = (props) => {
  const chatEntryComponents = props.log.map((entry, i) => {
    return (
      <ChatEntry sender={ entry.sender } body={ entry.body } timeStamp={<Timestamp time={ entry.timeStamp }/>} />
    )
  })

  return(
    <section className="chat-log">
     { chatEntryComponents }
    </section>
  )
}

export default ChatLog;
