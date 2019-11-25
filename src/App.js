import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import chatEntry from './components/ChatEntry';
import chatData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog events={chatData}/>
      </main>
    </div>
  );
};

export default App;
