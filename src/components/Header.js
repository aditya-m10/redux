import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

export default function Home(props) {
    console.log("header",props.productData)
    return<>
    {props.productData.length!==0 &&
    <span className="cart-length">{props.productData.length}</span>}
    <div >
        <FaShoppingCart className="cart-item"/>
    </div>

    </>
}