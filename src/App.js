import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from "./components/ChatEntry";
// import ChatLog from "./components/ChatLog";

const App = () => {
  console.log(chatMessages);

  const personA=chatMessages[0].sender
  const personB=chatMessages[1].sender

  return (
    <div id="App">
      <header>
        <h1>Chat between {personA} and {personB}</h1>
      </header>
      <main>




        <ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timestamp={chatMessages[0].timeStamp}/>




      </main>
    </div>
  );
};

export default App;




//       <Timeline events={timelineData.events} />
