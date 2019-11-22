import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js'

const App = () => {
  console.log(chatMessages);

  const message = {
    "sender":"Vladimir",
    "body":"why are you arguing with me",
    "timeStamp":"2018-05-29T22:49:06+00:00"
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatEntry message = {message.sender} body = {message.body} time = {message.timeStamp} />
      </main>
    </div>
  );
};

export default App;
