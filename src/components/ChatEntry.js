import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';
import chatLog from '../data/messages.json'
import ChatLog from './ChatLog';

const ChatEntry = (props) => {
  let timestamp = <Timestamp time={props.timestamp} />
  if (props.sender==="Vladimir") {
      return(
        <section className = "chat-entry local" >
      <div className="local">
          <p className = "entry-name">{props.sender}</p>   
          <div className= "entry-bubble"> 
          <p className = "entry-status">{props.body} </p>
          <p className = "entry-time">{timestamp}</p>
         </div>
          </div> 
        </section>
      )
  
       }
      else { 
      return(
        <section className = "chat-entry remote" >
    
        <p className = "entry-name">{props.sender}</p>   
        <div className= "entry-bubble"> 
        <p className = "entry-status">{props.body} </p>
        <p className = "entry-time">{timestamp}</p>
        </div>
        
        </section>
      )
       
      }

}

export default ChatEntry;