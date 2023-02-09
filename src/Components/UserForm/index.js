import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label
} from "reactstrap"
import UserInput from "../UserInput";

function UserForm(props){
    const {changeHandler, saveHandler, userData} = props //lifting state up
    return(
        <Form className='bg-dark text-white p-3 border rounded'>
            <FormGroup>
              <Label>Nombre</Label>
             <UserInput
                name = "name"
                handler = {changeHandler}
                value = {userData.name}
             />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <UserInput
                name = "email"
                handler = {changeHandler}
                value = {userData.email}
            />
            </FormGroup>
            <Button 
              type="button" 
              color="success" 
              onClick={saveHandler} // lifting state up
              > 
            Guardar</Button>
        </Form>
    )
}


export default UserForm