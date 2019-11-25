import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  // const selectStyles = props.class + ' ' + (props.present ? 'present' : 'absent');
  // const selectStyles = props.present ? 'present' : 'absent';

  return(
    <section>
      <h3>chat entry</h3>
      <div>
        prop senter: {props.entry.sender}
        prop body: {props.entry.body}
        prop time: <Timestamp time={props.entry.timeStamp} />
      </div>
    </section>
  );
};

export default ChatEntry;