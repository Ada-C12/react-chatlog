import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


import ChatEntry from './components/ChatEntry';



const App = () => {
  // console.log(chatMessages);

  let m1 = chatMessages[0];

  return (
    <div id="App">
      <header>
        <h1>Spill That Tea!</h1>
      </header>

      <main>

        <ChatEntry entry={m1}/>

        <hr /><hr /><hr />
        <ChatLog chatMessages={chatMessages} />

      </main>
    </div>
  );
};

export default App;
