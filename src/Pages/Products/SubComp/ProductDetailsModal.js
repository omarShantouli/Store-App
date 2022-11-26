import React from "react";
import Price from 'react-price';
import Rate from 'react-rating-stars-component';

function ProductDetailsModal({product}){

    return(
        <div className="product-details-modal"> 
            <div className="details-img-wrapper ms-5 me-5">
                <img src={product.image} className="details-img" alt={product.title}  />
            </div>
            <div className="details-rate-wrapper d-flex align-items-center mx-3">
                <div className="details-rate">
                    <Rate 
                        value={product?.rating?.rate}
                        size={30}
                        edit = {false}
                    />
                </div>
                <div className="mx-2 pt-1">|</div>
                <div className="details-reviews">
                </div>
                <div className="details-count pt-2 text-secondary">
                    {product?.rating?.count}
                </div>
            </div>
            <div className="details-price text-success fw-bold fs-3 mx-3">
                <Price 
                    cost={product.price}
                    currency = {"$"}
                />
            </div>
            <div className="details-desc">
                {product.description}
            </div>
        </div>
    )
}


export default ProductDetailsModal;