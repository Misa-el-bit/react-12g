import React,{useState} from "react";
import{
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Alert 
} from "reactstrap"

const ProductForm = (props) =>{
    const {inputHandler, buttonHandler, buttonText, success, defaultData} = props
    return(
        <Col xs="12">
            <Form className="bg-dark text-white p-3 border rounded shadow">
                {
                    success && <Alert color="info">
                        El producto se guardo con éxito!!!
                    </Alert>
                    
                }
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="name" onChange={inputHandler} value={defaultData.name || ""} placeholder="Nombre"/>
                </FormGroup>
                <FormGroup>
                    <Label>Descripción</Label>
                    <Input type="text" name="description" onChange={inputHandler} value={defaultData.description || ""} placeholder="Descripcion"/>
                </FormGroup>
                <FormGroup>
                    <Label>Imagen</Label>
                    <Input type="text" name="picture" onChange={inputHandler} value={defaultData.picture || ""} placeholder="url"/>
                </FormGroup>
                <FormGroup>
                    <Label>Precio</Label>
                    <Input type="text" name="price" onChange={inputHandler} value={defaultData.price || ""} placeholder="$0.00"/>
                </FormGroup>
                <Button className="mt-3" color="primary" onClick={buttonHandler}>{buttonText}</Button>
            </Form>
        </Col>
    )
}

export default ProductForm