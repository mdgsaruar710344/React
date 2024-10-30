import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";
import './App.css'
import { AddToLS, getFromLS, RemoveFromLS } from "./handleLS";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
      .then(res => res.json())
      .then(data => setProducts(data))
  }
    , [])


  useEffect(() => {
    const savedData = getFromLS();
    if (products.length > 0) {


      console.log(savedData);

      const matchingProductArray = []

      for (const id of savedData) {

        const matchedProduct = products.find(product => product.id === id)

        matchingProductArray.push(matchedProduct);


      }

      console.log('matchingArray', matchingProductArray)
      //  if(matchingProductArray.length>0){
      setcart(matchingProductArray);

      // setcart(matchingProductArray);
    }


  }, [products])




  function handleAddToCart(product) {

    const newCart = [...cart, product]
    setcart(newCart);
    //  console.log(newCart);
    AddToLS(product.id)

  }
  function handleRemoveFromCart(product) {
    const idx = product.id
    const updatedCart = cart.filter(product => product.id !== idx)
    setcart(updatedCart);
    RemoveFromLS(idx);
  }


  return (
    <div>
      <div className="cart-list">
        Cart:{cart.length}
        <br></br>
        <div >
          Items: {cart.map(product => <div className="cart-details" key={product.id}>{product.title}</div>)}
        </div>

      </div>
      <div>

        Products are shown below:
        <div className="products-list">
          {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}></Product>)}
        </div>
      </div>


    </div>
  );
};

export default Products;