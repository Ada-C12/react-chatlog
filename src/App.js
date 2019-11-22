import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'

const App = () => {
  console.log(chatMessages);

  const messages = chatMessages
  const message=chatMessages[0]


  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatEntry />
      </main>
    </div>
  );
};

export default App;
