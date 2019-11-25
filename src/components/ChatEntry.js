import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import './ChatEntry.css'

const sender = (name) => {
  if (name === "Vladimir") {
    return "local"
  } else {
    return "remote"
  }
}

const chatEntry = (props) => {
  

  return (
    // <section className={`chat-entry.${sender(props.sender)}`}>
    <section className={`chat-entry ${sender(props.sender)}`}>
      <h3 className="entry-name">{props.sender}</h3>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{<Timestamp time = {props.timestamp}/>}</p>
      </section>
    </section>
  );
}

// Student.propTypes = {
//   fullName: PropTypes.string.isRequired,
//   nickName: PropTypes.string.isRequired,
//   pronouns: PropTypes.string.isRequired,
//   birthday: PropTypes.string,
//   demos: PropTypes.shape({
//     age: PropTypes.number.isRequired,
//     grade: PropTypes.string,
//     house: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default chatEntry;