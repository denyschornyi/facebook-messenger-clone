import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const sendMessege = (input) => {
    console.log(input)
  }
  return (
    <div className="App">
      <h1>I will get a job in this month</h1>

      <input type="text" onChange={(event) => setInput(event.target.value)}/>
      <button onClick={() => sendMessege(input)} >Send Message</button>
      
      {/* messages themselves */}
    </div>
  );
}

export default App;