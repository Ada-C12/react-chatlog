import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from "./components/ChatLog";

const App = () => {
  const localPerson=chatMessages[0].sender;

  let i = 1;
  const length = chatMessages.length;

  while (i < length) {
    if (chatMessages[i] !== localPerson) {
      break;
    } else {
      i += 1;
    }
  }

  const remotePerson = chatMessages[i].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between {localPerson} and {remotePerson}</h1>
      </header>
      <main>
        <ChatLog chats={chatMessages} local={localPerson}/>
      </main>
    </div>
  );
};

export default App;
