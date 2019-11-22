import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from "./components/ChatEntry";
import ChatLog from "./components/ChatLog";

const App = () => {
  console.log(chatMessages);

  const localPerson=chatMessages[0].sender;
  let remotePerson;

  let i = 1;

  while (chatMessages[i].sender === localPerson) {
    i += 1
  }

  remotePerson = chatMessages[i].sender

  return (
    <div id="App">
      <header>
        <h1>Chat between {localPerson} and {remotePerson}</h1>
      </header>
      <main>
        <ChatLog chats={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
