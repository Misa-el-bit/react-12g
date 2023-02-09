import React from "react";
import {
    Input
} from "reactstrap"

function UserInput(props){
    const {name, handler, value } = props //lifting state up
    return(
        <Input 
        name= {name} 
        onChange={handler} // lifting state up
        value={value} // para limpiar el formulario cuando se guarda algo
        />
    )
}

export default UserInput