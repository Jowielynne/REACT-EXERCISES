import React from 'react';
import Clock from './components/Clock'; 
import WelcomeMessage from './components/WelcomeMessage';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Clock />
      <WelcomeMessage/>
    </div>
  );
}

export default App;
 