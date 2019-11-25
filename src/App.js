import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header>
        <h1>Ada's Chat Log</h1>
      </header>
      <main>
        <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
