import React from "react";
import {useParams} from "react-router-dom"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardTitle
} from "reactstrap"

const ProductDetail = (props) =>{
    const {id} = useParams() //hook para obtener los parametros de la URL
    return (
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <CardTitle>Producto Selecionado {id}</CardTitle>
                        <CardText>Descripción del Producto Seleccionado</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ProductDetail