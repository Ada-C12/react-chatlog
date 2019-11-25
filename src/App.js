import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>className='App-title'>Chat Between {chatMessages[0].sender} and {chatMessages[1].sender} </h1>
      </header>
      <main className='App-Main'>
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
