import React from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap"

const UserForm = (props) =>{
    const {userHandler, saveUser} = props

    return(
        <>
        <Form className='bg-dark text-white p-3 border rounded'>
            <FormGroup>
              <Label>Escribe algo </Label>
              <Input name='name' onChange={userHandler}/>
            </FormGroup>
            <FormGroup>
              <Label>Escribe algo </Label>
              <Input name='email' onChange={userHandler}/>
            </FormGroup>
            <Button type='button' color="success" onClick={saveUser}>Guardar</Button>
        </Form>
        </>
    )
}

export default UserForm