import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import FlipMove from 'react-flip-move';

import './App.css';

import Message from './Message';
import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Denys', message: "I got a job in this month"}, 
    {username: "Graz", message: 'I use to love you'} ]);
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    //run once when the app components loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt('What is your name?'));
  },[]);

  const sendMessege = (event) => {
    event.preventDefault();
    let inputMessage = input.trim();
    
    db.collection('messages').add({
      message: inputMessage,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt="Messenger logo"/>
      <h1>I will get a job in this month</h1>
      <h2>Welcome {username}</h2>
    
      <form className="app__form">
        <FormControl>
          <InputLabel >Enter Message</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)}/>

          <IconButton type="submit" 
                variant="contained" 
                color="primary"
                disabled={!input}
                onClick={(event) => sendMessege(event)}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      {/* messages themselves */}

      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} message={message} username={username}/>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
