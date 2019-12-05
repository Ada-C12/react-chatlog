import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  const messages = chatMessages

  return (
    <div id="App">
      <header>

        <h1>Chat log</h1>
      </header>
      <main>
        <ChatLog messages={messages}/>
      </main>
    </div>
  );
};

export default App;
