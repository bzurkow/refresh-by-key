import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const defaultCount = 0

const Counter = props => {
  const [count, setCount] = useState(0)

  useEffect( () => {
    console.log('Mount: ' + count)
    return () => { console.log('Dismount: ' + count) }
  }, [])

  return (
    <div>
      <p>
        Count: { count }
      </p>
      <button onClick={()=>setCount(count+1)}>
        Add
      </button>
      <InnerCount />
    </div>
    )
}

const InnerCount = props => {
  const [count, setCount] = useState(0)

  useEffect( () => {
    console.log('Mount Inner: ' + count)
    return () => console.log('Dismount Inner: ' + count)
  }, [])

  return (
    <div>
      <p>
        Inner Count: { count }
      </p>
      <button onClick={()=>setCount(count+1)}>
        Add To Inner Count
      </button>
    </div>
    )
}


function App() {
  const [key, setKey] = useState(0)
  return (
    <div className="App" key={key}>
        <Counter />
        <p>
          Key: {key}
        </p>
        <button onClick={()=>setKey(key+1)}>
          Reset
        </button>
    </div>
  );
}

export default App;
