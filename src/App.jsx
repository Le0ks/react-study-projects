import React from 'react';
import './App.css'

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Открыть модальное окно</button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <button className="close" onClick={() => setOpen(false)}>&times;</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam possimus excepturi unde! Repudiandae nesciunt est atque natus ipsum maxime dicta sapiente sequi dignissimos et ex odio necessitatibus, quo facere?</p>
        </div>
      </div>
    </>
  );
}

export default App
