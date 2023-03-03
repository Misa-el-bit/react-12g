import React, {useState, useEffect} from "react";
import api from "../../lib/api"
import "./style.scss"
import{
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button
} from "reactstrap"
import{
    useParams,
    Link
} from "react-router-dom"

const ProductDetal = () =>{
    const [productData, setProductData] = useState({})
    const [showPreview, setShowPreview] = useState(false)
    const productId = useParams()
    console.log(productId.id)

    useEffect(() => {
        const getProductById = async () => {
          const result = await api.getProductById(productId.id)
          console.log(result)
          setProductData(result)
        }
        getProductById();
      }, []);
    
    const {name, description, picture, price} = productData
    return (
        <Col xs="12">
           <Card shadow dark >
            <div 
            className="cover" 
            style={{backgroundImage: `url(${picture})`}} 
            onClick={ () => setShowPreview(!showPreview)}
            >
                { showPreview && <div 
                className="img-preview" 
                style={{backgroundImage: `url(${picture})`}}
                onClick={ () => setShowPreview(!showPreview)}
                ></div>}
            </div>    
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted d-flex">{price}</CardSubtitle>
                <CardText className="">{description}</CardText>
                <div className="d-flex justify-content-between">
                    <Link to={`/edit-product/${productId.id}`}>
                        <Button type="button" color="primary">Editar</Button>
                    </Link>
                </div>
            </CardBody>
            </Card>
        </Col>
    )
}

export default ProductDetal