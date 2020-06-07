import React from 'react'
import Img from "gatsby-image"

const Product = ({ product }) => {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
                <Img fluid={product.image.fluid} className="card-img-top" />
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>{product.price}</h6>
                </div>
                <button
                    className="btn btn-yellow my-3 text-capitalize w-50 mx-auto snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url="https://ismycoffeeshop.netlify.app/#!/checkout"
                    data-item-image={product.image.fluid.src}
                    data-item-name={product.title}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product