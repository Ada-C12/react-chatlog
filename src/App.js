import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  
  let local = 'Vladimir';
  let remote = 'Estragon';

  return (
    <div id="App">
      <header>
        <h1>Chat between {remote} and {local}</h1>
      </header>
      <main>
        <ChatLog data={chatMessages} local={local} remote={remote}/>
      </main>
    </div>
  );
};

export default App;
