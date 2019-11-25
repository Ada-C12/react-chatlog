import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import './ChatEntry.css'

const chatEntry = (props) => {
  
  return (
    <section>
      <h3>{props.sender}</h3>
        <p>{props.body}</p>
        <p>{<Timestamp time = {props.timestamp}/>}</p>
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