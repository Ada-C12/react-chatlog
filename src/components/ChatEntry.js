import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp.js';

const ChatEntry = () => {
  let data =  {
    "sender":"Vladimir",
    "body":"why are you arguing with me",
    "timeStamp":"2018-05-29T22:49:06+00:00"
  };

  return(
    <span className='chat-entry'>
      <h3 className='entry-name'>{data.sender}</h3>
      <p className='entry-bubble'>
        {data.body}
        <p className='entry-time'>
          <Timestamp time={data.timeStamp} />
        </p>
      </p>
    </span>
  );
};

export default ChatEntry;