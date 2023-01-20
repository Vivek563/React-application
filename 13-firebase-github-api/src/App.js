import React, {useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router

import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//toasty
import {ToastContainer} from "react-toastify"
// import "react-toastify/dist/React-Toastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//component
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './context/UserContext';




const App = () => {

  const [user, setUser] = useState(null)


  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
      
          <Route exact path='/' component={Home}/>
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='*' component={PageNotFound}/>
        
      </UserContext.Provider>
    </Router>
  );
}

export default App;
