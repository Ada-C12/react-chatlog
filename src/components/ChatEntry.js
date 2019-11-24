import React from 'react';
import Timestamp from './Timestamp.js';
import './ChatEntry.css'

const ChatEntry = (props) => {
    const entry = props.entry;
    const chatClassName = (entry.sender === "Vladimir") ? "chat-entry local" : "chat-entry remote";

    return (
        <section className={chatClassName}>
            <strong className="entry-name">{entry.sender}</strong>
            <section className="entry-bubble">
                <p>{entry.body}</p>
                <section className="entry-time"><Timestamp time={entry.timeStamp} /></section>
            </section>
        </section>
    );
};
export default ChatEntry;