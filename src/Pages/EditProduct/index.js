import React, {useState, useEffect} from "react";
import api from "../../lib/api"
import {
    useParams,
    useNavigate
} from "react-router-dom"
import ProductForm from "../../Components/ProductForm";

const EditProduct = () =>{
    const productId = useParams().id
    const [productData, setProductData] = useState({})
    const [success, setSuccess] = useState(false)
    const history = useNavigate()
    
    useEffect(() => {
        const getProductById = async () => {
          const result = await api.getProductById(productId)
          console.log(result)
          setProductData(result)
        }
        getProductById();
      }, []);
    // useEffect(() => {
    //     const getProductById = async () => {
    //       const selectedProduct = await api.getProductById(productId.id)
    //       setSelectedProduct(selectedProduct)
    //     }
    //     getProductById();
    //   }, []);

    const showSuccess = () =>{
        setSuccess(true)
        setTimeout( function(){
            setSuccess(false)
            history("/")
        },1500)
    }
    
    const inputHandler = event =>{
        const {name, value} = event.target
        setProductData({...productData, [name] : value})
    }

    const buttonHandler = async () =>{
        console.log(productData)
        const result = await api.updateProduct(productData, productId)
        console.log(result)
        result.name && showSuccess()    
    }

    return(
        //<h1>Editar Producto</h1>
        <ProductForm
            inputHandler = {inputHandler}
            buttonHandler = {buttonHandler}
            success = {success}
            buttonText = "Guardar Cambios"
            defaultData = {productData}
        />
    )
}

export default EditProduct