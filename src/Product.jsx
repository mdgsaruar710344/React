import { useState } from 'react';
import './App.css'

const Product = ({product,handleAddToCart,handleRemoveFromCart}) => {
 // console.log(product);

  const {title, price, image, rating}=product
  const rate=rating.rate;


  
  return (
    <div className="product-details">
      Product Details: 
      <div> Title:{title}</div>
      <div className="product-img">
        <img src={image}/>
      </div>
      <div><p><u>Price: ${price}</u></p></div>
      <div><p>Rating:<u>{rate}</u></p></div>
      <div>
        <button onClick={()=>{handleAddToCart(product)}}>Add to Cart</button>
        <button onClick={()=>{handleRemoveFromCart(product)}}>Delete from Cart</button>
      </div>
      
    </div>
  );
};

export default Product;