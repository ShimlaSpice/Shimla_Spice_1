import { createContext, useContext, useMemo, useState } from 'react';
import products from '../data/products';
const StoreContext=createContext();
export const StoreProvider=({children})=>{const [cart,setCart]=useState([]);const [wishlist,setWishlist]=useState([]);const addToCart=(p)=>setCart(c=>{const f=c.find(i=>i._id===p._id);return f?c.map(i=>i._id===p._id?{...i,qty:i.qty+1}:i):[...c,{...p,qty:1}]});const value=useMemo(()=>({products,cart,wishlist,addToCart,setCart,setWishlist}),[cart,wishlist]);return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>};
export const useStore=()=>useContext(StoreContext);
