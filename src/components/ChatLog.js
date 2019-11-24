import React from 'react';
import ChatEntry from './ChatEntry.js';

const ChatLog = () => {
    const log = [
        {
            "sender": "Vladimir",
            "body": "why are you arguing with me",
            "timeStamp": "2018-05-29T22:49:06+00:00"
        },
        {
            "sender": "Estragon",
            "body": "Because you are wrong.",
            "timeStamp": "2018-05-29T22:49:33+00:00"
        },
        {
            "sender": "Vladimir",
            "body": "because I am what",
            "timeStamp": "2018-05-29T22:50:22+00:00"
        },
        {
            "sender": "Estragon",
            "body": "A robot.",
            "timeStamp": "2018-05-29T22:52:21+00:00"
        }
    ]

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