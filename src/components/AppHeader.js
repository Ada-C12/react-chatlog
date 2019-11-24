import React from 'react';

const AppHeader = (props) => {
  const senders = props.messages.map((message, index) => {
    return message.sender;
  })

  const uniqSenders = [...new Set(senders)];
  let sendersString = ''
  let i = 0
  while (i < uniqSenders.length) {
    if (i === uniqSenders.length - 1) {
      sendersString += `${uniqSenders[i]}`
    }
    else {
      sendersString += `${uniqSenders[i]} and `;
    }
    i++;
  }
  return (
    <h1><h1 id="App h1">Chat between {sendersString}</h1></h1>
  );
}

export default AppHeader;
