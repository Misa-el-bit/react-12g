import React from "react";
import{
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardImg,
    Button
} from "reactstrap"
import{
    Link
} from "react-router-dom"
import "./styles.scss"

const ProductCard = (props) =>{
    const {productData, productKey, } = props
    const {name, description, picture, price} = productData
    return (
        <Col xs="12" md="4" className="mb-3" key={productKey}>
            <Card shadow dark className="product-card" >
            <CardImg top width="100%" alt="Sample" className="card-img" src={picture}/>
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted d-flex" >${price}.00</CardSubtitle>
                <CardText className="">{description}</CardText>
                <Link to={`product-detail/${productKey}`}>
                    <Button type="button" color="primary">Ver Detalles</Button>
                </Link>
            </CardBody>
            </Card>
        </Col>
    )
}

export default ProductCard