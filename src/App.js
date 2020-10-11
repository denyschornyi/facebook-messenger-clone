import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

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
      setMessages(snapshot.docs.map(doc => doc.data()))
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
      <h1>I will get a job in this month</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel >Enter Message</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)}/>
          <Button type="submit" 
                variant="contained" 
                color="primary"
                disabled={!input}
                onClick={(event) => sendMessege(event)}>
                    Send Message
        </Button>
        </FormControl>
      </form>

      {/* messages themselves */}

      {messages.map(message => (
        <Message message={message} username={username}/>
      ))}
    </div>
  );
}

export default App;
