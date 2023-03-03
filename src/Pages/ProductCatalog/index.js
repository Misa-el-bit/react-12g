import React, {useState, useEffect} from "react";
import{
    Col,
    Row,
    
} from "reactstrap"
import ProductCard from "../../Components/ProductCard";
import api from "../../lib/api"


const ProductCatalog = () =>{
    const [products, setProducts] = useState({})
    // useEffect( async () =>{
    //     const result = await api.getAllProducts()
    //     console.log(result)
    // },[])
    useEffect(() => {
        const getAllProducts = async () => {
          const result = await api.getAllProducts()
          console.log(result)
          setProducts(result)
        }
        getAllProducts();
      }, []);

    return(
        <Col xs="12">
            <h1>Catálogo de Productos</h1>
            <Row>
                {
                    Object.keys(products).map(product =>{
                        //const {name, description, picture, price } = products[product]
                        return(
                            <ProductCard 
                                productKey = {product}
                                productData = {products[product]}
                            />
                        )
                    }) 
                }
            </Row>
        </Col>
    )
}

export default ProductCatalog

