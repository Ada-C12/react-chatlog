import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import speechBubbleL from './images/speechBubbleLeft.png';
import speechBubbleR from './images/speechBubbleRight.png';


const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>

        <img src={speechBubbleL}></img>
        <img src={speechBubbleR}></img>

      </main>
    </div>
  );
};

export default App;
