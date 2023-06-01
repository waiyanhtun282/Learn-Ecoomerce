import React from 'react';
import { StateContextCustom } from '../context/StateContext';

const ProductsCarts = (props) => {
  let { id, title, description, brand, thumbnail, category ,price} = props;

   const {dispatch} =StateContextCustom();

  return (
    <div className="shadow-md  p-3 rounded-sm ">
      <img
        src={thumbnail}
        alt=""
        className="w-[250px] h-[250px] object-cover mx-auto"
      />
      <div className="">
        <div className=" flex justify-around items-center my-3 border-b-2 pb-2">
          <h2 className=" text-indigo-500 text-[18px] font-medium ">
            {title.substring(0, 20)}...
          </h2>

          <h3 className=" text-[17px] text-cyan-500"> {category}</h3>
        </div>
        <p className=" max-w-[300px] pb-2">{description.substring(0, 49)}...</p>
        <div className=" border-y-2 border-y-violet-300  py-2 flex justify-between">
          <h2 className=" text-teal-500 text-[18px]">{brand}</h2>
          <p className=" text-[20px] text-red-500">${price}</p>
        </div>
        <div className=" my-2 flex justify-between">
          <button className=" px-3 py-1 bg-[hotpink] rounded-sm">Detail</button>
          <button type='submit' className=" px-3 py-1 bg-[#000] rounded-sm text-white " onClick={() =>dispatch({type:"ADD_TO-CART",payload:props})}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCarts
