import React from "react";
export default function Home() {
    return<>
    <h1>home component</h1>
    <div className="cart-wrapper">
        <div className="image-wrapper item">
            <img alt="mobile" src="https://m.media-amazon.com/images/I/41q7YUp4H1L._SX300_SY300_QL70_FMwebp_.jpg"/>
        </div>
        <div className="text-wrapper item">
            <span>
                Samsung
            </span>
            <span>
                Price $10000
            </span>
        </div>
        <div className="button-wrapper item">
            <button>Add to cart</button>
        </div>
    </div>
    </>
}