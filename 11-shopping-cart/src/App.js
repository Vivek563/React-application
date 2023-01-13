import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify';


function App() {

const [cartItem, setCardItem] = useState([])

const addInCard = item => {
  const isAlreadyAdded = cardItem.findIndex(function(array){
    return array.id === item.id
  })

  if (isAlreadyAdded !== -1) {
    toast("already add in card",{
      type:"error"
    })
  }

  setCardItem([...cartItem, item])
}


const buyNow = () => {
  setCardItem([])

  toast("Purchase Complete",{
    type:'success'
  });
};

const removeItem = item => {
  setCardItem(cartItem.filter(singleItem.id !== item.id))
};



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
