import React from 'react';
import ChatEntry from './ChatEntry.js';
import './ChatLog.css'

const ChatLog = (props) => {
    const log = props.log;

    const entries = log.map((entry, i) => {
        return (
            <section key={i}>
                <ChatEntry entry={entry} />
            </section>
        );

    });

    return (
        <section className="chat-log">
            {entries}
        </section>
    );

};

export default ChatLog;