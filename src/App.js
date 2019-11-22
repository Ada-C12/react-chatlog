import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  let local = chatMessages[0]['sender'];
  let remote = chatMessages[1]['sender'];

  return (
    <div id="App">
      <header>
  <h1>Chat between {remote} and {local}</h1>
      </header>
      <main>
        <ChatLog data={chatMessages}></ChatLog>

      </main>
    </div>
  );
};

export default App;
