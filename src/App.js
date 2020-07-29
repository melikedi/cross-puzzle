import React from 'react';
import './App.css';
import Square from './components/square/square.component';
function App() {
  return (
    <div className="App">
      <Square text='a' iseditable={false}></Square>
       
    </div>
  );
}

export default App;
