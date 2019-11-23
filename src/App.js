import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const LOCAL = "Estragon";
let REMOTE = null;
let title = null;

const App = () => {
  // STARTING point
  // console.log(chatMessages);

  // find who REMOTE is
  for (let hash of chatMessages) {
    if (hash.sender !== LOCAL) {
      REMOTE = hash.sender;
      break;
    }
  }

  // set the title
  if (REMOTE) {
    title = `${LOCAL.toUpperCase()} & ${REMOTE.toUpperCase()}: Spilling That Tea!`
  } else {  // What if there was never a reply? REMOTE is still null
    title = `${LOCAL.toLocaleUpperCase()}: Talking to myself`
  }
  
  
  return (
    <div id="App">
      <header>
        <h1>{title}</h1>
      </header>

      <main>
        
        <ChatLog chatMessages={chatMessages} local={LOCAL}/>

      </main>
    </div>
  );
};

export default App;
