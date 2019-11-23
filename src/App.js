import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  let firstSender = chatMessages[0].sender;
  let secondSender = chatMessages[1].sender;

  return (
    <div id="App">
      <header id="App-header">
        <h1>{`Chat between ${firstSender} and ${secondSender}`}</h1>
      </header>
      <main>
        <section className="chat-log">
          <ChatLog entries={chatMessages}/>
          {/* <ChatEntry entry={chatMessages[0]}/> */}
        </section>
      </main>
    </div>
  );
};

export default App;
