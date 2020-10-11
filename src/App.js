import React, {useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

import './App.css';

import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Denys', text: "I got a job in this month"}, 
    {username: "Graz", text: 'I use to love you'} ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('What is your name?'));
  },[]);

  const sendMessege = (event) => {
    event.preventDefault();
    let inputMessage = input.trim();
    setMessages([
      ...messages, {username: username, text: inputMessage}
    ]);
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
        <Message text={message.text} username={message.username}/>
      ))}
    </div>
  );
}

export default App;
