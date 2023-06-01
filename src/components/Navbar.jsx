import React from 'react';
import { FaShopify} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { StateContextCustom } from '../context/StateContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const {search,setSearch,state:{carts}} =StateContextCustom();
  

  return (
    <div className=" shadow-sm bg-[#eee] py-3 flex justify-around items-center sticky top-0 left-0 z-[100] opacity-[0.8]">
      <h2 className=" flex items-center">
        <span className="text-[20px] font-semibold text-fuchsia-800">
          Shopping
        </span>
        <FaShopify className=" text-2xl ml-5 text-[hotpink]" />
      </h2>

      <div className=" flex items-center">
        <form action="">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" border-2 focus:border-red-500 border-sky-400 focus:placeholder-fuchsia-500 outline-none rounded-md placeholder-rose-500 px-1 py-1"
            placeholder="Search products ..."
          />
        </form>
        <Link to='/addtocart'>
          <div className=" ml-5 relative">
            <AiOutlineShoppingCart className="text-2xl text-[hotpink]" />
            <span className="absolute w-4 h-4 rounded-full flex justify-center items-center bg-slate-500 left-3 bottom-4 text-rose-600">
              {carts.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar
