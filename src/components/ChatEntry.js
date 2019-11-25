import React from 'react';
import TimeStamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {

  const messageType = () => {
    let selectStyles = '';
    selectStyles =  (props.author==='Vladimir' ? 'chat-entry local' : 'chat-entry remote');
    return selectStyles

  }

  return(
    <section className={messageType()}>
      <p className='entry-name'>{props.author}</p>
      <article className="entry-bubble">
        <p>{props.text}</p>
        <p className='entry-time'><TimeStamp time={props.time}/></p>
      </article>

    </section>
  )
};

export default ChatEntry;