import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header className="App header">
        <h1 className="App h1">Chat between Vladimir and Estragon</h1>
      </header>

      <main className="App main">
        <ChatLog messages={chatMessages} />

      </main>
    </div>
  );
};

export default App;
