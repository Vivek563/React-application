import React from "react";
import "./style.css";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello world !!</h1>

      <Button title="App Store"></Button>
      <Button title="Play store"></Button>
      <Button></Button>

      {/* <button className='button'>App Store</button>
        <button className='button'>Play Store</button> */}
    </div>
  );
};

export default App;
