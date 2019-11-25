import React from "react";
import "./App.css";
import chatMessages from "./data/messages.json";
import ChatLog from "./components/ChatLog";

const App = () => {
  console.log(chatMessages);

  let userSet = new Set();

  chatMessages.forEach(function(message) {
    userSet.add(message.sender);
  });

  const users = Array.from(userSet);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {users[0]} and {users[1]}
        </h1>
      </header>
      <main>
        <ChatLog chats={chatMessages} />
      </main>
    </div>
  );
};

export default App;
