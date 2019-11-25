import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <section className="chat-log">
        <ChatLog messages={chatMessages} />
        </section>
      </main>
    </div>
  );
};

export default App;
