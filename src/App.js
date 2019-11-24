import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  console.log(chatMessages);

  return (
    <div className="App-header">
      <header className="App">
        <h1>Chat Log</h1>
      </header>
      <main>
      <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
