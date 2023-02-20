import React, {useState, useEffect} from "react";
import {
    Row,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Button,
    Col
} from "reactstrap"
import api from "../../Assets/lib/api"
import "./style.scss"

import {
    Link
} from "react-router-dom"


const ProductCatalog = (props) => {
    const [productCatalog, setProductCatalog] = useState(null)
    const [collapsed, setCollapsed] = useState(true)
    useEffect( async ()=>{
            const data = await api.getAllProducts()
            console.log(data)
            const singleProduct = await api.getProductById("producto 1")
            console.log(singleProduct)
            //const neyProduct = await api.createProduct({name:"producto nuevo", description:"Producto creado desde la App"})
            setProductCatalog(data)
            // api.deleteProductById("-NOgh9nL3TnUKNYnFkIB")
            // api.updateProductById({name:"producto parchado"},"-NOgdrvZxU6Vgc5-DHuB")
    },[])

    const {data} = props
    
    return (
        <Row> 
            {/* Conditional rendering*/}
            {
                !productCatalog &&  <div className="spinner"> 
                    <div className="dot"></div>
                </div>
            }
            {
                productCatalog && 
                <>
                 <h1>Catálogo de Productos</h1>
                {
                    Object.keys(productCatalog).map( product =>{ //Object.keys devuelve un array con las llaves de cada item que este en el objeto
                        console.log(productCatalog[product])
                        const {name, description} = productCatalog[product]
                        return ( 
                            <Col xs="12" md="4" className="mb-3" key={product}>
                                <Card key={product}>
                                    <CardBody >
                                        <CardTitle>{name}</CardTitle>
                                        <CardText collapsed={collapsed} className={ !collapsed ? "open": ""}>{
                                                collapsed 
                                                    ? (
                                                        <>
                                                            ${description.slice(0,20)}...
                                                            <span 
                                                            className="text-primary"
                                                            onClick={() => setCollapsed(!collapsed)}
                                                            >Ver más</span>
                                                        </>
                                                    )
                                                    : (
                                                        <>
                                                        {description}
                                                        <span 
                                                            className="text-primary"
                                                            onClick={() => setCollapsed(!collapsed)}
                                                        >Ver menos</span>
                                                        </>
                                                    )
                                                    
                                            }
                                        </CardText>
                                        <Button color="dark" type="button" data-product-key={product}>Ver detalles</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }) 
                }
                </>
            }
        </Row>  
    )
}

export default ProductCatalog