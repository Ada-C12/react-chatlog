import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  // Copied from Vlad Bezden's answer on https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
  // Uses the spread syntax to create an array of the Set of unique senders from the array of chatMessages
  const chatSenders = [...new Set(chatMessages.map((message) => message.sender))];
  
  return (
    <div id="App">
      <header>
    <h1>{`Chat between ${chatSenders.join(' and ')} `}</h1>
      </header>
      <main>
        <ChatLog 
          chatMessages={chatMessages}
        />
      </main>
    </div>
  );
};

export default App;
