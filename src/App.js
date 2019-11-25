import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
      </header>
      <main>
        <ChatEntry entry={chatMessages[0]} />
      </main>
    </div>
  );
};

export default App;
