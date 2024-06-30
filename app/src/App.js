import React from 'react';
import { Greeting , Message } from "./greating";
import  Button  from "./btn";
import './App.css';

function App() {
  const btnClick = () => {
    console.log("awdawdadad")
  }
  return (
    <div className="App">
     <Greeting className="re" name="Stepan" />
     <Message text ="wad'wdadd" />
     <Button  className="btn" onClick={btnClick}/>
    </div>
  );
}

export default App;
