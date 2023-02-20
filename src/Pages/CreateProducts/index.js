import React, {useState,useEffect} from "react";
import api from "../../Assets/lib/api";
import "./style.scss"
import{
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button
} from "reactstrap"

const CreateProducts = () =>{
    const [productData, setProductData] = useState({});
    const [showAlert, setShowAlert] = useState(false)
    const changeHandler = event =>{
        setProductData({...productData,[event.target.name]: event.target.value})
    }
    const saveProduct = async () =>{
        const result = await api.createProduct(productData)
        result && setShowAlert(true)
        setTimeout(function(){
            setShowAlert(false)
        },2500)
    }
    return (
        <Col xs="12">
        <h1>Crear Productos</h1>
        <Form className="bg-dark text-white p-3 my-3">
            <FormGroup>
                <Label>Nombre:</Label>
                <Input name="name" onChange={changeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label>Descripción:</Label>
                <Input name="description" onChange={changeHandler}/>
            </FormGroup>
            <Button type="button" color="primary" onClick={saveProduct}>Guardar Producto</Button>
        </Form>
        {showAlert && <div className={`custom-alert ${showAlert ? 'shown':''}`}>
            <p>Producto guardado con éxito</p> 
        </div>}
        </Col>
    )
}

export default CreateProducts