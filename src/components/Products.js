import React from 'react'
import Rating from './Rating';

export default function Products(props) {
    const {product}=props;
    return (
        <div className="card" key={product._id}>
        <a href={`/product/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
        <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a> 
          <Rating Rating={product.rating} numReviews={product.numReviews}/>
          <div className="price">fcfa{product.price}</div>
        </div>
      </div>
    )
}
