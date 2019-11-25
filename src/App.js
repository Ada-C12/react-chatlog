import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  let user1 = chatMessages[0].sender
  let user2 = chatMessages[1].sender
  
  return (
    <div id='App'>
      <header id='App header'>
        <h1>Chat between {user1} and {user2}</h1>
      </header>
      <main id='App main'>
        <ChatLog chats={chatMessages} users={[user1, user2]}/>
      </main>
    </div>
  );
};

export default App;
