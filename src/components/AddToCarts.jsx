import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StateContextCustom } from '../context/StateContext';
import Carts from './Carts';

const AddToCarts = () => {
  const {state:{carts}} =StateContextCustom();
  // console.log(carts);
  const [mainTotal,setMainTotal] =useState(0);
  // console.log(mainTotal);

useEffect(() =>{
setMainTotal(total);
},[])
  const increaseTotal =(price) => {
     setMainTotal(mainTotal +price)
  }
  const decreaseTotal = (price) => {
     setMainTotal(mainTotal + price);

  };
  const total =() =>carts?.reduce((pv,cv) => pv+cv.price ,0);
  return (
    <>
      {carts.length === 0 ? (
        <div className=" h-screen items-center justify-center flex ">
          <div className=" space-y-3">
            <h2 className=" text-pink-500 text-2xl capitalize">
              Your data is Empty
            </h2>
            <Link to="/">
              <button className="flex mx-auto px-3 py-1 bg-red-500 text-white rounded-md">
                Fill it
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center gap-6 h-screen items-center">
          {carts?.map((cart) => {
            return (
              <Carts
                key={cart.id}
                item={cart}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            );
          })}
        </div>
      )}
       <hr className='w-[70%] mx-auto my-3 border-[1.5px] border-pink-200'/>
        <div className=" flex justify-around items-center ">
          <h2 className="text-teal-500 text-[20px] pt-2 ">Total</h2>
          <p className=" text-red-500 text-[20px]">${mainTotal}</p>
        </div>
      
    </>
  );
}

export default AddToCarts;
