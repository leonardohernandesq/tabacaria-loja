'use client';

import { useCart } from "@/hooks/useCart";
import { productsFake } from "@/lib/Products";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<ProductType>();
    const [activeImage, setActiveImage] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { addProductToCart } = useCart();

    function getThisProduct(slug: string) {
        return productsFake.find((product) => product.slug === slug);
    }

    const [images, setImages] = useState([]);


    useEffect(() => {
        const foundProduct = getThisProduct(params.id);
        if (foundProduct) {
            setProduct(foundProduct);

            setImages([
                { id: 0, src: foundProduct.image},
                { id: 1, src: '/triton.jpg' },
                { id: 2, src: '/regal.jpg' },
                { id: 3, src: '/amazon.jpg' },
                { id: 4, src: '/narguilanew.jpeg' },
            ]);
        } else {
            toast.error("Product not found");
        }
    }, [params.id])

    return (
        <div className="text-white w-full max-w-7xl flex flex-row">
            <section className="w-full lg:mr-10 grid grid-cols-[120px,1fr] grid-rows-4 gap-4 max-h-[600px] overflow-hidden">
                {
                    images.map((image, index) => {
                        return (
                            <div 
                                onMouseEnter={() => activeImage === index && setIsMouseOver(index)}
                                onMouseLeave={() => activeImage === index && setIsMouseOver(null)}
                                onMouseMove={(e) => activeImage === index && setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`${activeImage === index ? 'row-start-1 row-end-6 col-start-1 col-end-3' : `row-start-${index} row-end-${index+1} col-start-0 col-end-1`} cursor-pointer`}
                            >
                                <div className="relative h-full w-full ">
                                    <img className={`h-full w-full`} src={image.src} alt={product?.title}/>
                                    {isMouseOver === index && (
                                        <div className={`absolute border-2 border-black w-36 h-36 bg-contain bg-no-repeat z-10 bottom-0 right-0`} 
                                            style={{ 
                                                backgroundImage: `url(${image.src})`,
                                                backgroundPosition: `-${mousePosition.x * 1.45}px -${mousePosition.y * 1.1}px`,
                                                backgroundSize: '800px 800px',
                                            }} 
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })
                }
            </section>
            <section className="w-full">
                <div className="text-white text-center flex flex-col justify-center items-center border border-white w-24 h-24 p-4 mb-5 rounded-md cursor-pointer" title={`Clique para conhecer a linha ${product?.defaultCategory.nome}`}>
                    {product && <Image src={`${product?.defaultCategory.image}`} alt={`${product?.defaultCategory.nome}`} width={72} height={72}/>}
                    <p className="font-bold">{product?.defaultCategory.nome}</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{product?.title}</h1>
                    <p className="my-2">Marca: {product?.brand}</p>
                    <p className="my-4">{product?.short_description}</p>
                    <label htmlFor="" className="text-white my-2">
                        <span className="mr-2">Cor:</span>
                        <select name="" id="" className="text-black p-2 w-40 rounded-md">
                            {product?.colors.map((color, index) => <option key={index} value={color}>{color}</option>)}
                        </select>
                    </label>
                    <p className="text-3xl font-bold my-6">{product?.price} €</p>
                </div>
                <div className="flex gap-5 my-4">
                    <input type="number" className="bg-white text-black p-3 rounded-md w-full" placeholder="Quantidade" defaultValue={1}/>
                    <button className="rounded-md bg-[#FDB73C] text-[#492400] w-full h-12 text-md text-center" onClick={() => addProductToCart(product.id)}>Adicionar ao carrinho</button>
                </div>
                
            </section>
        </div>
    );
}