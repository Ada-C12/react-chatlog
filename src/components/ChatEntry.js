import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {

  return (
    <article className="chat-entry">
      <span className="entry-name">{props.sender}</span>
      {props.body}
      {props.timeStamp}
      


    </article>

  );

}

export default ChatEntry;






  
