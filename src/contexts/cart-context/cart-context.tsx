import React, { createContext, useState } from "react";

type CartItemType = {
    productID: string,
    requestedQty: number
}
type CartDataType = {
    items : CartItemType[],
    length: number
}

export const CartContext = createContext({
    cartData: {} as CartDataType,
    addToCart: (id: string, currentQty: number)=>{},
    removeFromCart: (productID:  string) => {},
    // getItemRequestedQty: (productID:  string) : number => 0
})


const CartContextProvider : React.FC<{
    children: React.ReactNode
}> = ({children}) =>{

    const [cartState, setCartState] = useState<CartDataType>({
        items:[],
        length: 0
    });

    const addToCartItems = (id: string, currentQty: number) => {
        
        if(currentQty <= 0) return;

        let exist = cartState.items.find(x=>x.productID == id)
        if(exist){
            if(exist.requestedQty >= currentQty) return;
            
            let index = cartState.items.indexOf(exist);
            cartState.items[index].requestedQty += 1;

        }else{
            cartState.items.push({
                productID: id,
                requestedQty: 1
            })
        }

        setCartState({
            ...cartState,
            length: cartState.items.length
        })

        console.log(cartState)
    }

    const removeFromCartItems = (productID: string) => {

    }

    return <CartContext.Provider value={{
        cartData: cartState,
        addToCart:  addToCartItems,
        removeFromCart: removeFromCartItems
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;