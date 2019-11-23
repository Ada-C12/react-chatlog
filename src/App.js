import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


import ChatEntry from './components/ChatEntry';

const LOCAL = "Estragon";

const App = () => {
  // console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Spill That Tea!</h1>
      </header>

      <main>

        
        <ChatLog chatMessages={chatMessages} local={LOCAL}/>

      </main>
    </div>
  );
};

export default App;
