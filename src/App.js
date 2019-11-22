import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry sender='Vladimir' body='why are you arguing with me' time='2018-05-29T22:49:06+00:00' /> */}
        <ChatLog messages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
