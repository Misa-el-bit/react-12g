import React from 'react'
import {Table} from "reactstrap"

function UsersTable(props){
    const {usersList} = props
    return(
        <Table dark>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                usersList.map((user, index) =>{ //se saca de nuestro estado la lista de users que este guardada
                    const {name, email} = user // deconstruir el objeto
                    return(
                    <tr key={index}>
                        <th scope="row"> 1</th>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

export default UsersTable