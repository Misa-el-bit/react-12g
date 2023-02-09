import React, {useState, useEffect} from "react";
import {Table} from "reactstrap"

const UsersTable = (props) =>{
    const [IsShown, setIsShown] = useState(true)
    const {usersList} = props
    //handler
    const toggle = () => {
        setIsShown(!IsShown)
    }
    useEffect(()=>{
        console.log("yo solo funciono una vez")
    },[])
    useEffect(()=>{
        console.log("yo funciono cada que se togglea la tabla ")
    },[IsShown])
    useEffect(()=>{
        console.log("yo funciono siempre")
    })

    return ( 
        <>
        <button type="button" onClick={toggle} >{IsShown ? "Ocultar" : "Mostrar"}</button>
        {
        IsShown &&
        <Table>
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