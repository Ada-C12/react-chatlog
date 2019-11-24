import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  return (
    <div id="App">
      <header>
        <h1 className="App-title">Chat between {chatMessages[0].sender} and {chatMessages[1].sender} </h1>
      </header>
      <main className="App-Main">
        <ChatLog messages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
