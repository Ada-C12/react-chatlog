import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';


const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog log={chatMessages}/>
        
        {/* <ChatEntry sender="Vladimir" body="why are you arguing with me" timeStamp= {<Timestamp  time="2018-05-29T22:49:06+00:00"/> }/> */}
      </main>
    </div>
  );
};

export default App;
