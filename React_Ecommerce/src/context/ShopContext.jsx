import React, { createContext, useEffect, useState } from "react";
import allProduct from '../components/assets/all_product'
import CartItems from "../components/CartItems/CartItems";
// import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let Cart = {};
    for(let index = 0;index < allProduct.length+1;index++){
        Cart[index] = 0
    }
    return Cart;
}

const ShopContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) =>{ 
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      
    }
    const removeFromCart = (itemId) =>{          
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartItems = ()=>{
        let totalCart = 0
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalCart += cartItem[item]
            }

        }
        return totalCart
    }

    const getTotalCartAmount = ()=>{
        let totalAMount = 0;
        for(const item in  cartItem){
            if(cartItem[item]>0){
                let itemInfo = allProduct.find((product)=>product.id === Number(item))
                totalAMount +=itemInfo.new_price * cartItem[item]
            }
           
        }
        return totalAMount 

    }
    const contextValue = {getTotalCartAmount,getTotalCartItems,allProduct,cartItem,addToCart,removeFromCart,setCartItem}
    
    

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider