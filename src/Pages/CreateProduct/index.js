import React,{useState} from "react";
import api from "../../lib/api"
import {
    useNavigate
} from "react-router-dom"
import{
    Col,
} from "reactstrap"
import ProductForm from "../../Components/ProductForm";

const CreateProduct = () =>{
    const [productData, setProductData] = useState({})
    const [success, setSuccess] = useState(false)
    const history = useNavigate()

    const inputHandler = event =>{
        const {name, value} = event.target
        setProductData({...productData, [name] : value})
    }

    const showSuccess = () =>{
        setSuccess(true)
        setTimeout( function(){
            setSuccess(false)
            history("/")
        },1500)
    }

    const buttonHandler = async () =>{
        console.log(productData)
        const result = await api.createProduct(productData)
        console.log(result)
        result.name && showSuccess()    
    }

    return(
        <Col xs="12">
            <h1>Crear Producto</h1> 
            <ProductForm 
                inputHandler = {inputHandler}
                buttonHandler = {buttonHandler}
                buttonText = "Guardar Producto"
                success = {success}
                defaultData = {productData}
            />
        </Col>
    )
}

export default CreateProduct