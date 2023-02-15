import React from "react";
import {
    ListGroup,
    ListGroupItem
} from "reactstrap"

const ProductCart = (props) =>{
    const {cartList} = props
    return(
        <ListGroup>
            {
                cartList.map((product, index)=>{
                    const {name, price} = product
                    return(
                        <ListGroupItem className="d-flex justify-content-between" color="dark" >
                            {name} 
                            <span className="text-primary"> ${price}.00</span>
                        </ListGroupItem> 
                    )
                })
            }
            <ListGroupItem className="d-flex justify-content-between" color="dark"> Total:
            <span class="text-success">
                ${cartList.reduce((accum, current)=> accum + current.price, 0)}.00</span>
            </ListGroupItem>
        </ListGroup>
    )
}

export default ProductCart