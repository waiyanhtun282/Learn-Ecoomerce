import React from 'react';
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducers";



const StateContext =createContext();

export const StateContextProvider= ({children})=>{
  

   const [productList,setProductList] =useState([]);
  const [search,setSearch] =useState('');

  
  //  console.log(productList);
 
  useEffect(() => {
   fetchData();
  },[]);

  

  useEffect(() => {
    dispatch({ type:"GET_PRODUCTS",payload:productList});
    const filterData =productList.filter(item =>item.title.toLowerCase().includes(search));
    dispatch({ type:"GET_PRODUCTS",payload:filterData});
  },[productList,search]);

  const fetchData=async()=> {
    const api = await fetch(`https://dummyjson.com/products`);
    const {products} = await api.json();
    setProductList(products);
  };



  const initialState = {
    products:[],
    carts:[],
  };

  const [state, dispatch] = useReducer(reducer,initialState);

 const data = {state,dispatch,search,setSearch,};

  return(
    <StateContext.Provider value={data}>
    {children}
    </StateContext.Provider>
  )
};
export const StateContextCustom =() => useContext(StateContext);