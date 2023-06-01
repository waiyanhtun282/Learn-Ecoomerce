import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai';
import {BsChevronUp,BsChevronDown} from 'react-icons/bs';
import { StateContextCustom } from '../context/StateContext';

const Carts = ({ item: { carts }, increaseTotal, decreaseTotal }) => {
  console.log(carts);
  const [qty, setQty] = useState(1);
  const {dispatch} =StateContextCustom();
  const increaseQty = () => {
    setQty(qty + 1);
    increaseTotal(carts.price)
  };
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      decreaseTotal(carts.price);
    }
  };

  const oneTotalItem = qty * carts.price;
  return (
    <div className=" flex  justify-evenly items-center shadow-md p-3 min-w-[800px]">
      <div className="flex gap-6 items-center">
        <img
          src={carts.thumbnail}
          alt=""
          className="w-[100px] h-[100px] object-cover"
        />
        <div className="space-y-1">
          <h2 className=" text-[19px]">{carts.title}</h2>
          <h3 className=" text-[13px] p-1 max-w-[100px] bg-teal-500 text-center rounded-3xl">
            {carts.category}
          </h3>
        </div>
      </div>

      <div className="">
        <p className="max-w-[200px] ">
          {carts.description.substring(0, 20)}...
        </p>
      </div>
      <div className=" space-y-2">
        <h3 className=" text-[17px] text-teal-500">{carts.brand}</h3>
        <p className="text-[18px] text-[hotpink]">${oneTotalItem.toFixed(2)}</p>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p className=" text-teal-500 text-[17px]" onClick={increaseQty}>
          <BsChevronUp />
        </p>
        <p className=" text-red-500 text-[17px]">{qty}</p>
        <p className=" text-teal-500 text-[17px]" onClick={decreaseQty}>
          <BsChevronDown />
        </p>
      </div>
      <div className="">
        <button className="text-red-500 border-2 border-red-500 duration-300 hover:text-white hover:bg-red-500 p-1 rounded-md flex items-center" onClick={() =>dispatch({type:"REMOVE_CART",payload:carts})}>
          <span className=" border-r-2 px-1">Remove</span>
          <AiFillDelete className=" text-[17px]" />
        </button>
      </div>
    </div>
  );
};

export default Carts
