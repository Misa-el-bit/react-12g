//Convertir el archivo en un componente de clase
import React, {Component} from 'react';
import logo from './logo.svg';
import CustomHeading from './Components/CustomHeading';
import CustomList from './Components/CustomList';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      title: "Hola koders",
      listItems: []
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)
  }

  changeHandler(event){
    const text = event.target.value
    this.setState({title: text})
  }

  saveHandler(){
    this.setState({listItems:[...this.state.listItems, this.state.title]})
  }

 
  render(){ //el metodo render sirve para renderizar 
    return(
      <> 
        <input type="text" onChange={this.changeHandler}/>
        <button onClick={this.saveHandler}>Guardar</button>     
        <CustomList
          listItems = {this.state.listItems} //props
        />
      </>
    )
  }
}

export default App;
