import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter, Button, Col } from "reactstrap";
import "./style.scss"

const ProductCard = (props) =>{
    console.log(props)
    const {name, price, description} = props.productData // se extraen o deconstruyen las props
    const {productKey, clickHandler} = props
    return (
        <Col xs="12" md="3">
            <Card className="bg-dark text-white product-card">
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                <CardText className="text-white">${price}.00</CardText>
            </CardBody>
            <CardFooter>
                <Button 
                color="success" 
                type="button"
                data-product-key = {productKey}
                onClick = {clickHandler}
                >Agregar al carrito </Button>
            </CardFooter>
            </Card>
        </Col>
        
        
    )
}

export default ProductCard