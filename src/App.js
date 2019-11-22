import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const local = chatMessages[0].sender;
  const remote = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat Between {local} and {remote}</h1>
      </header>
      <main>
      <ChatLog messages={chatMessages} local={local} remote={remote}/>
      </main>
    </div>
  );
};

export default App;
