import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  const chatMembers = []

  for (const element of chatMessages) { 
    if (!chatMembers.includes(element.sender))
      { chatMembers.push(element.sender) }
  }

  let chatMembersString = chatMembers.join(" and ")

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMembersString}</h1>
      </header>
      <main>
        <section className="chat-log">
        <ChatLog messages={chatMessages} />
        </section>
      </main>
    </div>
  );
};

export default App;
