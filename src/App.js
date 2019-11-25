import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  const filler = [
    {
      "sender":"Clara",
      "body":"Boo knows",
      "timeStamp":"2018-05-29T22:49:06+00:00"
    },
    ]

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>

      <div className = "feed">
        <ChatLog messages ={chatMessages.messages}/>
      </div>
      </main>
    </div>
  );
};

export default App;
