import React from 'react';
import Timestamp from './Timestamp.js';
import './ChatEntry.css'

const ChatEntry = () => {
    const entry = {
        "sender":"Vladimir",
        "body":"why are you arguing with me",
        "timeStamp":"2018-05-29T22:49:06+00:00"
      };

    return (
        <section>
            <span>{entry.sender}</span>
            <p>{entry.body}</p>
            <Timestamp time={entry.timeStamp}/>
        </section>
    );
};
export default ChatEntry;