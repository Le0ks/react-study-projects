import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>- Минус</button>
      <button onClick={() => setCount((count) => count + 1)}>Плюс +</button>
    </>
  );
}

export default App
