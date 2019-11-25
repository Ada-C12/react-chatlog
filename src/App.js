import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  let senders = new Set();
  for (let i = 0; i < chatMessages.length; i++) {
    senders.add(chatMessages[i].sender);
  }

  let recipients = "";
  let counter = 1;
  senders.forEach(sender => {
    if (counter === 1) {
      recipients += ` ${sender}`;
    } else if (counter < senders.size) {
      recipients += `, ${sender}`;
    } else if (counter === senders.size) {
      recipients += ` and ${sender}`;
    }
    counter += 1;
  });

  return (
    <div id="App">
      <header>
        <h1>Chat between{recipients} </h1>
      </header>
      <main>
        <ChatLog log={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
