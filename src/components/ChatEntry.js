import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => { 

const buildStyles = (sender) => {
  let selectStyles = (sender === 'Vladimir'? 'chat-entry local' : 'chat-entry remote');
  return selectStyles;
}

  return(
    <section className={buildStyles(props.sender)}>
      <section className='chat-entry'>
      
        <div className='entry-name'>
          <p><strong>{props.sender}</strong></p>
        </div>

        <div className='entry-bubble'>
          <p>{props.body}</p>
  
          <div className='entry-time'>
            <p><Timestamp timeStamp={props.timeStamp}/></p> 
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChatEntry;
