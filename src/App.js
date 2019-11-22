import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  // console.log(chatMessages);

  return (
    <div id="App">
      <header>
      <ChatLog messages={chatMessages.messages} />
      </header>
      <main>

      </main>
    </div>
  );
};

export default App;
