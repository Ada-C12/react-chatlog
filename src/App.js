import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header className="App=header">
        <h1>Chat between Vladimir and Estragon</h1>
      </header>

      <main className="App-main">
        < ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}/>
      </main>
    </div>
  );
};

export default App;
