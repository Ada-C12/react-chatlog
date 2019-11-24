import React from 'react';
import ChatEntry from './ChatEntry.js';

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
        <section>
            {entries}
        </section>
    );

};

export default ChatLog;