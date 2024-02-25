"use client"

import Link from "next/link";
import { ProductType } from "../types/ProductType";
import ProductImage from "./ProductImage";

import { useCart } from '@/hooks/useCart'

type ProductProps = {
    product: ProductType;
};

export default function Product({ product }: ProductProps) {
    const { addProductToCart } = useCart();
    return (
        <div className="flex flex-col shadow-lg h-96 bg-[#492400] p-5 text-gray-300" key={product.id}>
            <div className="relative max-h-72 flex-1">
                <Link href={`/product/${product.slug}`}><ProductImage product={product} fill /></Link>
            </div>
            <div className="flex justify-between items-center font-bold my-3">
                <h1 className="w-40 truncate">{product.title}</h1>
                <p className="text-2xl text-[#FDB73C]">{product.price} €</p>
            </div>
            <button className="rounded-md bg-[#FDB73C] text-[#492400] px-3.5 py-2.5 text-md text-center" onClick={() => addProductToCart(product.id)}>Adicionar ao carrinho</button>
            
        </div>
    )
}