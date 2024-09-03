import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h>This is usestate</h>
      <p>number:{count}</p>
      <button onClick={()=>setCount(count+1)}>click to add</button>
    </div>
  );
}

export default App;
