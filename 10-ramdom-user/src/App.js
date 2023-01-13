import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css";






import Axios from "axios";


function App() {


  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api/')
    console.log("RESPONSE:", data);

const details = data.results[0]
setDetails(details)

  };
  
  useEffect(() => {
   fetchDetails()
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
