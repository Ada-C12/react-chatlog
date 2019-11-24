import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import AppHeader from './components/AppHeader';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header id="App header">
        <AppHeader messages={chatMessages} />
      </header>
      <main id="App main">
      <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
