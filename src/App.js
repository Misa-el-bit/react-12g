import React, {useState} from 'react';
import './App.scss';
import{
  Button,
  Form, 
  FormGroup,
  Input,
  Label,
} from "reactstrap"
import UsersTable from './Components/UsersTable';

const App = () => {
  const [title, setTitle ] = useState("Hola koders desde hook")
  const [users, setUsers] = useState()
  const [userData, setUserData] = useState({})

  //handlers
  const changeHandler = event =>{ 
    const value = event.target.value
    console.log(value)
    setTitle(value) // cambiar el estado
  }

  const userHandler = event =>{
    const property = event.target.name
    const value = event.target.value
    setUserData({...userData, [property]: value})
    console.log(userData)
  }

  const saveUser = ()=>{
    !users ? setUsers([userData]) : setUsers ([...users, userData])
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label>Escribe algo </Label>
          <Input name='name' onChange={userHandler}/>
        </FormGroup>
        <FormGroup>
          <Label>Escribe algo </Label>
          <Input name='email' onChange={userHandler}/>
        </FormGroup>
        <Button type='button' onClick={saveUser}>Guardar</Button>
      </Form>
      <h1>{title}</h1>
      { users && <UsersTable usersList = {users}/>}
    </>
  );
}

export default App;
