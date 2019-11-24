import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  // I did not make this bit a component because I don't think it would ever 
  // need to be repeated. This is designed to work for group messages.

  // Put all senders from JSON into an array
  const senders = chatMessages.map((message, index) => {
    return message.sender;
  })

  // Reduce the array to only unique names and put 'and' between names
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
  // End of section.

  return (
    <div id="App">
      <header id="App header">
        <h1 id="App h1">Chat between {sendersString}</h1>
      </header>
      <main id="App main">
      <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
