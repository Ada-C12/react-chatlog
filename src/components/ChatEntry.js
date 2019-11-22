import React from 'react';

const ChatEntry = (props) => {
  return (
      <div>
        <h1>{ props.sender }</h1>
        <p>{ props.body }</p>
        <p>{ props.timeStamp }</p>
      </div>
  );
};

export default ChatEntry;