import React, { useState } from 'react';
import './App.scss';
import {
  Button
} from "reactstrap"
import Products from "./Pages/Products"


const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <>
      <Button onClick = { () => setIsLogged(!isLogged) }>{!isLogged ? "login" : "sing out"}</Button>
      <Products isLogged={isLogged}/>
    </>
  );
}

export default App;
