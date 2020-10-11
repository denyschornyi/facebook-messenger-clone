import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['a', 'b', 'c']);


  const sendMessege = (event) => {
    event.preventDefault();
    if(input.trim()){
      let inputMessage = input.trim();
      setMessages([...messages, inputMessage]);
      setInput('');
    }
  }
  return (
    <div className="App">
      <h1>I will get a job in this month</h1>

      <form>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
        <button type="submit" onClick={(event) => sendMessege(event)}>Send Message</button>
      </form>

      {/* messages themselves */}

      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
