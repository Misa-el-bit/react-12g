import React, {useState} from "react";
import {Table, Input} from "reactstrap"

const UsersTable = (props) =>{
    const [IsShown, setIsShown] = useState(true)
    const {usersList, filterHandler} = props
    //handler
    const toggle = () => {
        setIsShown(!IsShown)
    }
    
    return ( 
        <>
        <button type="button" onClick={toggle} >{IsShown ? "Ocultar" : "Mostrar"}</button>
        <Input onChange={filterHandler}/>
        {
        IsShown &&
        <Table dark>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            usersList.map((user, index)=>{ // la lista vacia que se encuantra en nuestro estado
              const {name, email} = user 
              return(
                <tr key={index}> 
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
        }
        </>
    )
}

export default UsersTable