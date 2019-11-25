import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { tsPropertySignature } from '../../../../Library/Caches/typescript/3.6/node_modules/@babel/types/lib';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog chat={chatMessages}/>
        
      </main>
    </div>
  );
};

export default App;
