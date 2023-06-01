import React from 'react'
import { StateContextCustom } from '../context/StateContext';
import ProductsCarts from './ProductsCarts';

const Products = () => {
  const {
    state: {
      products
    },
  } = StateContextCustom();
  // console.log(products);
  return (
   
      <div className=" flex  flex-wrap gap-5 justify-center rounded-sm">
        {
          products?.map(product =>{
            return(
              <ProductsCarts  key={product.id} {...product}/>
            )
          })
        }
      </div>
  )
}

export default Products;
