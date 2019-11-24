import React from 'react';
import Timestamp from './Timestamp.js';
import './ChatEntry.css'

const ChatEntry = () => {
    const entry = {
        "sender": "Vladimir",
        "body": "why are you arguing with me",
        "timeStamp": "2018-05-29T22:49:06+00:00"
    };

    return (
        <section className="chat-entry local">
            <strong className="entry-name">{entry.sender}</strong>
            <section className="entry-bubble">
                <p>{entry.body}</p>
                <section className="entry-time"><Timestamp time={entry.timeStamp} /></section>
            </section>
        </section>
    );
};
export default ChatEntry;