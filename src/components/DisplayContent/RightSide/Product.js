import React from 'react';
// import mobile3 from "../../../amazon-image/mobile3.jpg";
import Rating from '@mui/material/Rating';
// import { useSlotProps } from '@mui/base';
import getSymbolFromCurrency from 'currency-symbol-map';





function Product(props) {
    return (
        <>
     
        <div className="product">
            <div className="product__image">
                <img src={props.definition.image} height="280px" />
            </div>
            <div className="product__name">
                 {props.definition.name}
            </div>
            <div className="product__rating">
                 <Rating name="read-only" value="4" style={{ fontSize : "20px"}} readOnly />
                {props.definition.rating}
            </div>
            <div className="product__price">
            { getSymbolFromCurrency('INR')}{props.definition.price}
            </div>
        </div>

        </>
    );
}






export default Product;