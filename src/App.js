import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['a', 'b', 'c']);

  console.log(input);
  console.log(messages);

  const sendMessege = () => {
    if(input.trim()){
      let inputMessage = input.trim();
      setMessages([...messages, inputMessage]);
      setInput('');
    }
  }
  return (
    <div className="App">
      <h1>I will get a job in this month</h1>

      <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
      <button onClick={sendMessege} >Send Message</button>

      {/* messages themselves */}
    </div>
  );
}

export default App;
