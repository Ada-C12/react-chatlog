import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  console.log(chatMessages);

  let chatter_1 = chatMessages[0].sender;
  let chatter_2 = '';
  let i = 1;
  if (chatMessages[i] === chatter_1) {
    i += 1;
  } else {
    chatter_2 = chatMessages[i].sender;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatter_1} and {chatter_2}</h1>
      </header>
      <main>
        <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;