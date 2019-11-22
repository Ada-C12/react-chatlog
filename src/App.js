import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  const findParticipants = (messageList) => {
    const participants = {};
    messageList.forEach((message) => {
      const sender = message.sender;
      participants[sender] = true;
    });
    return participants;
  };
  const chatParticipants = Object.keys(findParticipants(chatMessages)).join(' and ');

  return (
    <div id="App">
      <header>
        <h1>{chatParticipants}'s Chat</h1>
      </header>
      <main>
        <ChatLog message_list={chatMessages} />
      </main>
    </div>
  );
};

export default App;
