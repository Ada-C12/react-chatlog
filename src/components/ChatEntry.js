import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {

  return (
    <article className="chat-entry local">
      <div className="entry-name">{props.sender}</div>
      <div className="entry-bubble">{props.body}
        <div className="entry-time"><Timestamp time={props.timestamp}/></div>
      </div>
    </article>

  );

}

export default ChatEntry;
