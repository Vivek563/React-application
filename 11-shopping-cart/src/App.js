import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify';
import BuyPage from './components/BuyPage';


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
     <BuyPage addInCart={addInCart}/>
    </div>
  );
}

export default App;
