import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js'

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
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* <ChatEntry sender = {message.sender} body = {message.body} time = {message.timeStamp} /> */}
        {<ChatLog/>}
      </main>
    </div>
  );
};

export default App;
