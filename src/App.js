import React, {useState} from 'react';
import './App.scss';
import{
  Container,
  Row,
  Col
} from "reactstrap"
import UsersTable from './Components/UsersTable';
import UserForm from './Components/UserForm';


const App = () => {
  const [users, setUsers] = useState()
  const [userData, setUserData] = useState({})
  const [filterResult, setFilterResult] = useState([])

  //handlers
  const userHandler = event =>{
    const property = event.target.name
    const value = event.target.value
    setUserData({...userData, [property]: value})
    console.log(userData)
  }

  const saveUser = ()=>{
    !users ? setUsers([userData]) : setUsers ([...users, userData])
  }

  const filterHandler = event =>{
    const data = users
    const value = event.target.value
    const result = data.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    console.log(result)
    setFilterResult(result)
  }
  return (
    <>
    <Container fluid>
      <Row>
        <Col xs="12" md="3">
          <UserForm userHandler = {userHandler} saveUser = {saveUser}/>
        </Col>
        <Col xs="12" md="9">
          { users && 
            <UsersTable usersList = {filterResult.length ? filterResult : users}
            filterHandler = {filterHandler}
            />
          }
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
