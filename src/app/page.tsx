import Image from 'next/image';
import { ProductType } from '@/types/ProductType';

async function getProducts(){
  const res = await fetch('https://fakestoreapi.com/products')
  if(!res.ok){
    throw new Error("Failed to fetch products")
  }
  return  res.json();
}

export default async function Home(){
  const products = await getProducts();

  return(
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        
      {products.map((product: ProductType) =>  (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={product.id}>
            <Image src={product.image} alt={product.title} width={300} height={200} className="w-full h-56 object-cover object-center"/>
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{product.title}</h2>
            <p className="text-gray-700 text-base">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <span className="text-gray-900 font-bold text-xl">{product.price}</span>
              </div>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      )
      )}
      </div>
    </div>
  )
}