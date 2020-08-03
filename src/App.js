import React,{useState, useEffect} from 'react';

import './App.css';

import About from "./components/About"

function App() {

  // Show the Sections 
  const [show, setShow] = useState(true);
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(true);
  //   }, 4500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (   
    <div className="Container">
    {/* {!show && 
      <div className="Welcome">
        <img className="Image" src= '/image.jpeg' alt="My random cartoon" /> 
        <div className="Typewriter">
          <h1> Welcome to Tenzin's World. </h1>
        </div>
      </div>
    } */}
    {show && 
      <About /> 
    }
    </div>
  )
}

export default App;
