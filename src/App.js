//Convertir el archivo en un componente de clase
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      etapa:""
    }
    this.setEtapa = this.setEtapa.bind(this) //handler
  }
  setEtapa(event){
    const value = event.target.value
    console.log(value)
    this.setState({etapa: value})
  }
  render(){ //el metodo render sirve para renderizar 
    return(
      <> 
        <input className="control" type="radio" name="etapa" value="siga" onClick={this.setEtapa}/>
        <label for="">Siga</label>
        <input className="control" type="radio" name="etapa" value="precaucion" onClick={this.setEtapa}/>
        <label for="">Precaucion</label>
        <input className="control" type="radio" name="etapa" value="alto" onClick={this.setEtapa}/>
        <label for="">Alto</label>
        <div class="semaforo">
          <div className={`luz ${this.state.etapa}`}></div>
        </div>
      </>
    )
  }
}

export default App;
