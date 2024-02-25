'use client'

import { ProductType } from "@/types/ProductType";
import { createContext, useContext } from "react";
import { cartFake } from "@/lib/Cart";
import React from "react";
import { toast } from "react-toastify";

interface CartProviderProps {
    children: React.ReactNode;
}

export interface CartContextData {
    cart: Array<ProductType>;
    addProductToCart: (id: number) => void;
}

export const CartContext = createContext<CartContextData>(
    {} as CartContextData
)

export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = React.useState<Array<ProductType>>(cartFake);

    const addProductToCart = (id: number) => {
        setCart(prevCart => [...prevCart, id as any]);
        toast.success('Produto adicionado ao carrinho')
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const ctx = useContext(CartContext) as CartContextData;
    
    return ctx;
}

