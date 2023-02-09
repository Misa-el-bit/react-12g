//Convertir el archivo en un componente de clase
import React, {Component} from 'react';
import './App.scss';
import { 
    Col, 
    Container, 
    Row 
  } from 'reactstrap';
import UsersTable from './Components/UsersTable';
import UserForm from './Components/UserForm';

class App extends Component{
  constructor(){
    super()
    this.state = {
      usersList:[], //lista vacia
      userData:{}
    } 
    //hacer el binding
    this.onChangeHandler = this.onChangeHandler.bind(this) 
    this.saveHandler = this.saveHandler.bind(this)
  }
  //Handler del evento
  onChangeHandler(event){
    const property = event.target.name
    const value = event.target.value
    console.log(property + ": " + value)
    //setear estado
    this.setState({userData:{...this.state.userData,[property]: value}})
  }
  //handler del boton guardar
  saveHandler(){
    this.setState(
      {
        usersList:[...this.state.usersList,this.state.userData],
        userData: {name:"", email:""} // para limpiar el formulario cuando se guarda algo 
      })
  }
  render(){ //el metodo render sirve para renderizar 
    return(
      <> 
      <Container fluid>
        <Row>
          <Col xs="12" md="3">
           <UserForm
              changeHandler = {this.onChangeHandler} //Lifting state up
              saveHandler = {this.saveHandler}
              userData = {this.state.userData}
           />
          </Col>
          <Col xs="12" md="9">
            {
              this.state.usersList.length !== 0 &&
              <UsersTable usersList= {this.state.usersList}/>
            }
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}

export default App;
