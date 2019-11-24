import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>TxtMe 2.0</h1>
      </header>
      <main>

<ChatLog/>
      </main>
    </div>
  );
};

export default App;
