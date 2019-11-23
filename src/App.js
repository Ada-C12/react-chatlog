import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Daniela's Application</h1>
      </header>
      <main>
      <ChatLog chatlog={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
