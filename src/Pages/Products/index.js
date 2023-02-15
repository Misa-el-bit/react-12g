import React, {useState} from "react";
import ProductCard from "../../Components/ProductCard";
import ProductCart from "../../Components/ProductCart";
import data from "../../mockData" //se importa la data o modulo
import{
    Container,
    Row,
    Col,
} from "reactstrap"

const Products = (props) =>{
    const [products, setProducts] = useState(data.products)
    const [productCart, setProductCart] = useState([])
    const {isLogged} = props 
    //Handler
    const addToCart = event =>{
        const productIndex = event.target.dataset.productKey
        console.log(productIndex)
        console.log(products[productIndex])
        setProductCart([...productCart, products[productIndex]])
    }
    return(
        <Container fluid>
            <Row>
                <Col xs="12" md="8">
                    <Row>
                    {
                        isLogged ? ( //conditional rendering
                            <>
                            <h1>Esta es la pagina de productos</h1>
                            {
                                products.map((product, index)=>{ //iterar la data para generar c/u de las cards
                                return (
                                        <ProductCard
                                        key = {index} //agregar la key para identificar el elemento
                                        productData = {product}
                                        productKey = {index}
                                        clickHandler = {addToCart}
                                        />
                                    )
                                })
                            }
                            </>
                        ) : (
                        <h1>Debes iniciar sesión para ver este contenido</h1>
                        )
                    }
                    </Row>
                </Col>
                <Col xs="12" md="4">
                    <ProductCart cartList = {productCart}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Products