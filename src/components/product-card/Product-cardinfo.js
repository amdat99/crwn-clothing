import React from 'react';
import { useParams } from "react-router-dom";


function ProductCardInfo({ data}) {
    const { productId } = useParams();
    const product = data.find(p => p.id === Number(productId));
    let productData;
  
    if (product) {
      productData = (
        <div>
          <h3> {product.name} </h3>
          <p>{product.price}</p>
          <hr />
          <img alt="products" src={product.imageUrl} />
          <h4>{product.status}</h4>
        </div>
      );
    } else {
      productData = <h2> Sorry Product doesn't exist </h2>;
    }
  
    return (
      <div>
        <div>{productData}</div>
      </div>
    );
  };


export default ProductCardInfo;