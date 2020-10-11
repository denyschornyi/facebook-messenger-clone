import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['a', 'b', 'c']);

  const sendMessege = (event) => {
    event.preventDefault();
    let inputMessage = input.trim();
    setMessages([...messages, inputMessage]);
    setInput('');
  }

  
  return (
    <div className="App">
      <h1>I will get a job in this month</h1>

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
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
